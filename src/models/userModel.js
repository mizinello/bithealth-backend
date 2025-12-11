const pool = require('../config/database');
const { encryptPassword, comparePassword } = require('../utils/encryption');

const createUser = async (username, password, role) => {
  const hashedPassword = await encryptPassword(password);
  const [result] = await pool.execute(
    'INSERT INTO users (username, password, role) VALUES (?, ?, ?)',
    [username, hashedPassword, role]
  );
  return result.insertId;
};

const findUserByUsername = async (username) => {
  const [rows] = await pool.execute(
    'SELECT * FROM users WHERE username = ?',
    [username]
  );
  return rows[0];
};

module.exports = { createUser, findUserByUsername };