import User from "../models/User";

// for globalRouter
export const getJoin = (req, res) => res.render("join", { pageTitle: "Join" });

export const postJoin = async (req, res) => {
	const { name, username, email, password, location } = req.body;
	const usernameExists = await User.exists({ username });
	if (usernameExists) {
		return res.render("join", {
			pageTitle: "Join",
			errorMessage: "This username is already taken.",
		});
	}
	const emailExists = await User.exists({ email });
	if (emailExists) {
		return res.render("join", {
			pageTitle,
			errorMessage: "This email is already taken.",
		});
	}

	await User.create({
		name,
		username,
		email,
		password,
		location,
	});
	return res.redirect("/login");
};
export const login = (req, res) => res.send("Login Page");
// for userRouter
export const seeProfile = (req, res) => res.send("Profile");
export const logout = (req, res) => res.send("Logout");
export const editUser = (req, res) => res.send("Edit User");
export const deleteUser = (req, res) => res.send("Delte User");
