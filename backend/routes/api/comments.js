/**
 * Express router for handling comment-related API endpoints.
 * 
 * @module routes/api/comments
 * @requires express
 * @requires mongoose
 */

/**
 * Retrieves all comments from the database.
 * 
 * @async
 * @function GET /
 * @param {Object} req - Express request object
 * @param {Object} res - Express response object
 * @returns {Promise<void>} JSON array of comments or error message
 * @throws {Error} Returns 500 status with error message if fetch fails
 */

/**
 * Creates a new comment in the database.
 * 
 * @async
 * @function POST /
 * @param {Object} req - Express request object
 * @param {string} req.body.text - The comment text content
 * @param {string} req.body.author - The comment author name
 * @param {Object} res - Express response object
 * @returns {Promise<void>} JSON object of the newly created comment or error message
 * @throws {Error} Returns 500 status with error message if creation fails
 */

/**
 * Updates an existing comment by ID.
 * 
 * @async
 * @function PUT /:id
 * @param {Object} req - Express request object
 * @param {string} req.params.id - The comment ID to update
 * @param {string} req.body.text - The updated comment text
 * @param {string} req.body.author - The updated comment author
 * @param {Object} res - Express response object
 * @returns {Promise<void>} JSON object of the updated comment or error message
 * @throws {Error} Returns 500 status with error message if update fails
 */

/**
 * Deletes a comment by ID.
 * 
 * @async
 * @function DELETE /:id
 * @param {Object} req - Express request object
 * @param {string} req.params.id - The comment ID to delete
 * @param {Object} res - Express response object
 * @returns {Promise<void>} JSON success message or error message
 * @throws {Error} Returns 500 status with error message if deletion fails
 */

const router = require("express").Router();
const mongoose = require("mongoose");
const Comment = mongoose.model("Comment");

router.get("/", async (req, res) => {
  try {
    const comments = await Comment.find();
    res.status(200).json(comments);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch comments" });
  }
});

// create a route for adding a new comment
router.post("/", async (req, res) => {
  try {
    const { text, author } = req.body;
    const newComment = new Comment({ text, author });
    await newComment.save();
    res.status(201).json(newComment);
  } catch (error) {
    res.status(500).json({ error: "Failed to add comment" });
  }
});

// add a route for updating a comment
router.put("/:id", async (req, res) => {
  try {
    const commentId = req.params.id;
    const { text, author } = req.body;
    const updatedComment = await Comment.findByIdAndUpdate(
      commentId,
      { text, author },
      { new: true }
    );
    res.status(200).json(updatedComment);
  } catch (error) {
    res.status(500).json({ error: "Failed to update comment" });
  }
});

// add another route for deleting a comment
router.delete("/:id", async (req, res) => {
  try {
    const commentId = req.params.id;
    await Comment.findByIdAndDelete(commentId);
    res.status(200).json({ message: "Comment deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: "Failed to delete comment" });
  } 
});

module.exports = router;
