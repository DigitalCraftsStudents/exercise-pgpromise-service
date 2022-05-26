DROP TABLE IF EXISTS products;
CREATE TABLE products (
  id SERIAL PRIMARY KEY,
  name VARCHAR(64) NOT NULL,
  description VARCHAR(255) NOT NULL,
  thumbnail VARCHAR(255) NOT NULL,
  price DECIMAL(10,2) NOT NULL,
  brand VARCHAR(64) NOT NULL,
  category VARCHAR(32) NOT NULL,
  quantity INT NOT NULL CHECK (quantity > 0)
);