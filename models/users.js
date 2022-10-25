const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  name: String,
  email: String,
  password: String,
  gender: String,
  breed: String,
  age: Number,
  vaccins: Boolean,
  aboutMe: String,
  aboutMyOwner: String,
  activatedAccount: Boolean,
  city: String,
  images: [String],
  isLikedBy: [String],
  distanceMin: Number,
  distanceMax: Number,
  ageMin : Number,
  ageMax : Number,
  breddPref : String,
  genderPref : String,
});

const User = mongoose.model("User", userSchema);

module.exports = User;
