const router = require("express").Router();
const Post = require("../models/Post");
const User = require("../models/User");
const PlayList = require("../models/PlayList");
router.delete("/:id", async (req, res) => {
	const user = await User.findById(req.body.id);
	const playlist = await Playlist.findById(req.params.id);
	if (!user._id.equals(playlist.user))
		return res.status(403).send({ message: "User don't have access to delete!" });

	const index = user.playlists.indexOf(req.params.id);
	user.playlist.splice(index, 1);
	await user.save();
	await playlist.remove();
	res.status(200).send({ message: "Removed from library" });
});

router.get("/", async (req, res) => {
	const playlists = await PlayList.find();
	res.status(200).send({ data: playlists });
});

