const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

//Creating modes
const UserSchema = new mongoose.Schema({
    username: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
  });
  
  
 