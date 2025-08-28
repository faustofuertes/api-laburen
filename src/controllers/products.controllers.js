import pool from '../db.js';

export const getProducts = async (req, res) => {
    const { q } = req.query;

    try {
        let result;

        if (q) {
            result = await pool.query('SELECT * FROM products where name ILIKE $1', [`%${q}%`]);
        }
        else {
            result = await pool.query('SELECT * FROM products');
        }

        res.json(result.rows);
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: "Server internal error" });
    }
}

export const getProductById = async (req, res) => {
    const { productId } = req.params;
    const { rows } = await pool.query(`SELECT * FROM products WHERE id = ${productId}`);

    if (rows.length === 0) {
        return res.status(404).json({ error: 'Product not found' });
    }

    res.json(rows);
}