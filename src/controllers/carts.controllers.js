import pool from '../db.js';


export const getCartById = async (req, res) => {
    const { cartId } = req.params;

    try {
        const { rows: carts } = await pool.query(`SELECT id, created_at, updated_at FROM carts WHERE id = $1`, [cartId]);
        if (!carts.length) {
            return res.status(404).json({ error: 'Cart not found' });
        }
        const cart = carts[0];

        const { rows: items } = await pool.query(`
            SELECT ci.id, ci.product_id, ci.qty, p.name, p.price
            FROM cart_items ci
            JOIN products p ON p.id = ci.product_id
            WHERE ci.cart_id = $1
            ORDER BY ci.id`, [cartId]
        );

        return res.json({ cart, items });
    } catch (error) {
        console.error('[GET /carts/:id]', error);
        res.status(500).json({ error: 'Server internal error' });
    }
};

export const postCart = async (req, res) => {
    const items = Array.isArray(req.body.items) ? req.body.items : [];
    if (!items.length) {
        return res.status(400).json({ error: "Send minimun of 1 item to create a cart" });
    }

    const client = await pool.connect();
    try {
        await client.query("BEGIN");

        // 1. Create cart
        const { rows: carts } = await client.query(`
            INSERT INTO carts (created_at, updated_at) 
            VALUES (NOW(), NOW()) 
            RETURNING id, created_at, updated_at`);
        const cart = carts[0];

        // 2. Insert items
        for (const it of items) {
            await client.query(`
                INSERT INTO cart_items (cart_id, product_id, qty) 
                VALUES (${cart.id}, ${it.product_id}, ${it.qty})`);
        }

        await client.query("COMMIT");

        // 3. Brings all items and details
        const { rows: itemsRows } = await pool.query(`
            SELECT ci.id, ci.product_id, ci.qty, p.name, p.price 
            FROM cart_items ci JOIN products p ON p.id = ci.product_id 
            WHERE ci.cart_id = ${cart.id}`);

        res.status(201).json({ cart, items: itemsRows });
    } catch (error) {
        await client.query("ROLLBACK");
        console.error(error);
        res.status(500).json({ error: "Server internal error" });
    } finally {
        client.release();
    }
};

export const patchCart = async (req, res) => {
    const { cartId } = req.params;
    const items = req.body?.items ?? [];

    const client = await pool.connect();
    try {
        await client.query('BEGIN');

        for (const it of items) {
            const pid = Number(it.product_id);
            const qty = Number(it.qty);

            if (qty === 0) {
                await client.query(
                    'DELETE FROM cart_items WHERE cart_id = $1 AND product_id = $2',
                    [cartId, pid]
                );
            } else {
                await client.query(`
                    INSERT INTO cart_items (cart_id, product_id, qty)
                    VALUES ($1, $2, $3)`, [cartId, pid, qty]
                );
            }
        }

        await client.query('UPDATE carts SET updated_at = NOW() WHERE id = $1', [cartId]);
        await client.query('COMMIT');

        const { rows: itemsRows } = await pool.query(`
            SELECT ci.id, ci.product_id, ci.qty, p.name, p.price
            FROM cart_items ci
            JOIN products p ON p.id = ci.product_id
            WHERE ci.cart_id = $1
            ORDER BY ci.id`, [cartId]
        );

        return res.status(200).json({ cart: { id: cartId }, items: itemsRows });
    } catch (error) {
        await client.query('ROLLBACK');

        // 23503 = violación de FK → carrito o producto inexistente
        if (error?.code === '23503') {
            return res.status(404).json({ error: 'Cart or product not found' });
        }

        console.error('[PATCH /carts/:id]', error);
        return res.status(500).json({ error: 'Server internal error' });
    } finally {
        client.release();
    }
};