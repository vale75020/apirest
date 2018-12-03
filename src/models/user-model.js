import mongoose from "mongoose";
const Schema = mongoose.Schema;

const userSchema = new Schema({
  username: { type: String, required : true },
  password: { type: String, required : true },
  firstname: String,
  lastname: String,
  birthdate: Date
});

const User = mongoose.model("User", userSchema);

export default User;