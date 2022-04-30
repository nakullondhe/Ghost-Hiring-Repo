const router = require('express').Router();
const Comment = require('../../models/comment.schema')

// get comments
router.get('/comments', async (req, res) => {
  try {
    const comments = await Comment.find();
    res.status(200).json({ message: 'success', data: comments})
  } catch(error) {
    res.status(400).json({ message : "failed", error})
  }
})

// write comments
router.post('/comment', async (req, res) => {
  try {
    const comment = new Comment(req.body);
    await comment.save()
  } catch (error) {
    res.status(400).json({ message : "failed", error})
  }
});

// add upvotes
router.post('/comment/:commentId/upvote/', async (req, res) => {
  try {
    let votes;
    if(op === "add") {
      await Comment.findOneAndUpdate({ _id: req.params.commentId}, { $inc: {upvotes: 1}})
    } else {
      await Comment.findOneAndUpdate({ _id: req.params.commentId}, { $inc: {upvotes: -1}})
    }
  } catch(error) {
    res.status(400).json({ message : "failed", error})
  }
})


module.exports = router;