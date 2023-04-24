const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      require: true,
      min: 5,
      max: 20,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      max: 50,
      unique: true,
      validate: emailValidator,
    },
    password: {
      type: String,
      required: true,
      min: 6,
    },
    city: {
      type: String,
      max: 50,
    },
    desc: {
      type: String,
      max: 50,
    },
    followers: {
      type: Array,
      default: []
    },
    following: {
      type: Array,
      default: []
    },
    liked_song:{
      type: Array,
      default: [],
    },
    playlist:{
      type: Array,
      default: []
    }
  },
  { timestamps: true }
);

module.exports = mongoose.model("User", UserSchema);