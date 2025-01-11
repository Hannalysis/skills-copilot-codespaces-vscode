// Create Web Server

// Importing the express module
const express = require('express');
const router = express.Router();
const commentController = require('../controllers/commentController');

//Handle Request
router.get('/', commentController.getComments);
router.post('/', commentController.addComment);
router.put('/:id', commentController.updateComment);
router.delete('/:id', commentController.deleteComment);



