import User from "../models/User";
import bcrypt from "bcrypt";

// for globalRouter
export const getJoin = (req, res) => res.render("join", { pageTitle: "Join" });

export const postJoin = async (req, res) => {
	const { name, username, email, password, confirmPassword, location } =
		req.body;

	if (password !== confirmPassword) {
		return res.status(400).render("join", {
			pageTitle: "Join",
			name,
			username,
			email,
			location,
			errorMessage: "Password confirmation does not match.",
		});
	}
	const exists = await User.exists({ $or: [{ username }, { email }] });

	if (exists) {
		return res.status(400).render("join", {
			pageTitle: "Join",
			name,
			location,
			password,
			confirmPassword,
			errorMessage: "The Username / Email was already taken.",
		});
	}

	try {
		await User.create({
			name,
			username,
			email,
			password,
			location,
		});
	} catch (error) {
		return res.status(400).render("join", {
			pageTitle: "Join",
			errorMessage: error._message,
		});
	}

	return res.redirect("/login");
};

export const getLogin = (req, res) => {
	return res.render("login", { pageTitle: "Login" });
};

export const postLogin = async (req, res) => {
	const { username, password } = req.body;
	const pageTitle = "Login";
	// check a username exists in DB
	const user = await User.findOne({ username });
	if (!user) {
		return res.status(400).render("login", {
			pageTitle,
			errorMessage: "Account with this username doesn't exists",
		});
	}
	// check if password correct
	const match = await bcrypt.compare(password, user.password);
	if (!match) {
		return res
			.status(400)
			.render("login", { pageTitle, errorMessage: "Wrong password" });
	}
	// add information on session...
	req.session.loggedIn = true;
	req.session.user = user;
	return res.redirect("/");
};
// for userRouter
export const seeProfile = (req, res) => res.send("Profile");
export const logout = (req, res) => res.send("Logout");
export const editUser = (req, res) => res.send("Edit User");
export const deleteUser = (req, res) => res.send("Delete User");
