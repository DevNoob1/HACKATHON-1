const router = require("express").Router();
const Post = require("../models/Post");
const User = require("../models/User");
router.post("/", async (req, res) => {
  const newPost = new Post(req.body);
  try {
    const savedPost = await newPost.save();
    res.status(200).json(savedPost);
  } catch (err) {
    res.status(500).json(err);
  }
});
router.put("/:id", async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    if (post.userId === req.body.userId) {
      await post.updateOne({ $set: req.body });
      res.status(200).json("The song was successfully updated");
    } else {
      res.status(403).json("You can only update your song");
    }
  } catch (err) {
    res.status(500).json(err);
  }
});
router.delete("/:id", async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    if (post.userId === req.body.userId) {
      await post.deleteOne();
      res.status(200).json("The song has been deleted");
    } else {
      res.status(403).json("You cannot delete this song");
    }
  } catch (err) {
    res.status(500).json(err);
  }
});
router.put("/:id/like", async(req, res)=>
{
  try{
    const post = await Post.findById(req.params.id);
    const user = await User.findById(req.body.id);
    if(!user.liked_song.includes(post.userId)) {
      await user.updateOne({ $push: { liked_song: req.params.id } });
      await post.updateOne(likes+1)
    } else{
      await user.updateOne({ $pull: {liked_song: req.params.id}})
      await post.updateOne(likes-1)
    }
  }
  catch (err) {
    res.status(500).json(err);
  }

})
router.get("/:id", async (req, res) => {
    try {
      const post = await Post.findById(req.params.id);
      res.status(200).json(post);
    } catch (err) {
      res.status(500).json(err);
    }
  });
router.put("/:id", async(req, res) => {
  try {
    const user = await User.findById(req.body.id);
    const post = await Post.findById(req.params.id);
    if(!user.playlist.includes(post.id))
    {
      await user.updateOne({ $push: {playlist: post._id}});
    }
    else{
      res.status(403).json("this song is already in your playlist");
    }
  }
  catch (err) { 
     res.status(500).json(err);
  }
  })
  router.get("/like", async (req, res) => {
    const user = await User.findById(req.user._id);
    const posts = await Post.find({ _id: user.liked_song });
    res.status(200).send({ data: posts });
  });

module.exports = router;