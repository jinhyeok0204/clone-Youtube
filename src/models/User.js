import mongoose from "mongoose";
import bcrypt from "bcrypt";

const userSchema = new mongoose.Schema({
	email: { type: String, required: true, trim: true, unique: true },
	username: { type: String, required: true, trim: true, unique: true },
	password: { type: String, required: true, trim: true },
	name: { type: String, required: true, trim: true },
	location: String,
});

userSchema.pre("save", async function () {
	this.password = await bcrypt.hash(this.password, 10);
	console.log("Hashed password", this.password);
});

const User = mongoose.model("User", userSchema);

export default User;
