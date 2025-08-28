CREATE TABLE
    products (
        id SERIAL PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        description TEXT NOT NULL,
        price NUMERIC(10, 2) NOT NULL,
        stock INTEGER NOT NULL
    );

CREATE TABLE
    carts (
        id SERIAL PRIMARY KEY,
        created_at DATE NOT NULL,
        updated_at DATE NOT NULL
    );

CREATE TABLE
    cart_items (
        id SERIAL PRIMARY KEY,
        cart_id INTEGER NOT NULL REFERENCES carts (id) ON DELETE CASCADE,
        product_id INTEGER NOT NULL REFERENCES products (id) ON DELETE CASCADE,
        qty INTEGER NOT NULL
    );


INSERT INTO
    products (name, description, price, stock)
VALUES
    (
        'Sudadera Rojo XXL',
        'Perfecta para actividades al aire libre.',
        1167,
        218
    ),
    (
        'Falda Azul L',
        'Prenda cómoda y ligera.',
        805,
        41
    ),
    (
        'Chaqueta Blanco L',
        'Ideal para uso diario.',
        1070,
        320
    ),
    (
        'Camisa Rojo S',
        'Perfecta para actividades al aire libre.',
        1090,
        121
    ),
    (
        'Sudadera Rojo XL',
        'Material de alta calidad.',
        840,
        376
    ),
    (
        'Pantalón Negro M',
        'Prenda cómoda y ligera.',
        1295,
        199
    ),
    (
        'Pantalón Verde S',
        'Prenda cómoda y ligera.',
        525,
        257
    ),
    (
        'Sudadera Negro M',
        'Diseño moderno y elegante.',
        1008,
        319
    ),
    (
        'Chaqueta Azul S',
        'Material de alta calidad.',
        464,
        65
    ),
    (
        'Pantalón Verde XXL',
        'Ideal para uso diario.',
        1058,
        177
    );