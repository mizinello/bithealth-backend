const express = require('express');
const authenticateToken = require('../middleware/authMiddleware');
const authorizeRoles = require('../middleware/roleMiddleware');
const productController = require('../controllers/productController');
const router = express.Router();

router.get('/', authenticateToken, productController.getProducts);
router.get('/:id', authenticateToken, productController.getProduct);
router.post('/', authenticateToken, authorizeRoles('admin', 'staff'), productController.createProduct);
router.put('/:id', authenticateToken, authorizeRoles('admin'), productController.updateProduct);
router.delete('/:id', authenticateToken, authorizeRoles('admin'), productController.deleteProduct);

module.exports = router;