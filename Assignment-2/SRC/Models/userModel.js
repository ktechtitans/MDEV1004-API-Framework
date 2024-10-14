const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

//Creating modes
const UserSchema = new mongoose.Schema({
    username: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
  });
  
  UserSchema.pre("save", async function (next) {
    const salt = await bcrypt.genSalt(20);
    this.password = await bcrypt.hash(this.password, salt);
    next();
  });
  
  UserSchema.methods.isValidPassword = function (password) {
    return bcrypt.compare(password, this.password);
  };
  
  const User = mongoose.model("User", UserSchema);
  module.exports = User;