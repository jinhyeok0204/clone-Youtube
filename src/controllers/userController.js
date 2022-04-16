import User from "../models/User";

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
export const deleteUser = (req, res) => res.send("Delete User");
