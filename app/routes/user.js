const express = require('express');
const router = express.Router();

const { accessLevelVerifier, isAdminVerifier } = require('../middlewares/verifyToken');
const { UserController } = require('../controllers');

router.get('/', UserController.get_users);
router.get('/:id', isAdminVerifier, UserController.get_user);
router.get('/myinfo/:_id', UserController.get_myinfo);
router.put('/update/:id', UserController.update_user);
router.delete('/:id', isAdminVerifier, UserController.delete_user);

module.exports = router;