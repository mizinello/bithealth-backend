const pool = require('../config/database');

const getAllProducts = async () => {
  const [rows] = await pool.execute('SELECT * FROM products');
  return rows;
};

const getProductById = async (id) => {
  const [rows] = await pool.execute('SELECT * FROM products WHERE id = ?', [id]);
  return rows[0];
};

const createProduct = async (product) => {
  const { name, description, quantity, price } = product;
  const [result] = await pool.execute(
    'INSERT INTO products (name, description, quantity, price) VALUES (?, ?, ?, ?)',
    [name, description, quantity, price]
  );
  return result.insertId;
};

const updateProduct = async (id, product) => {
  const { name, description, quantity, price } = product;
  const [result] = await pool.execute(
    'UPDATE products SET name = ?, description = ?, quantity = ?, price = ? WHERE id = ?',
    [name, description, quantity, price, id]
  );
  return result.affectedRows;
};

const deleteProduct = async (id) => {
  const [result] = await pool.execute('DELETE FROM products WHERE id = ?', [id]);
  return result.affectedRows;
};

module.exports = {
  getAllProducts,
  getProductById,
  createProduct,
  updateProduct,
  deleteProduct
};