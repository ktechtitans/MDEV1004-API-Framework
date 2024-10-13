const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

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
  
  