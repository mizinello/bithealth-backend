const jwt = require('jsonwebtoken');
const { findUserByUsername } = require('../models/userModel');
const { comparePassword } = require('../utils/encryption');

const login = async (req, res) => {
  const { username, password } = req.body;

  const user = await findUserByUsername(username);
  if (!user) return res.status(400).json({ error: 'Invalid credentials' });

  const validPassword = await comparePassword(password, user.password);
  if (!validPassword) return res.status(400).json({ error: 'Invalid credentials' });

  const token = jwt.sign(
    { id: user.id, username: user.username, role: user.role },
    process.env.JWT_SECRET,
    { expiresIn: '1h' }
  );

  res.json({ token, role: user.role });
};

module.exports = { login };