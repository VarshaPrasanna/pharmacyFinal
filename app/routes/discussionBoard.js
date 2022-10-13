const express = require('express');
const router = express.Router();

const { DiscussionBoardController } = require('../controllers');
const { authenticationVerifier, accessLevelVerifier, isAdminVerifier } = require('../middlewares/verifyToken');

router.get('/', isAdminVerifier, DiscussionBoardController.get_messages);
router.get('/:userId', accessLevelVerifier, DiscussionBoardController.get_message)

module.exports = router;