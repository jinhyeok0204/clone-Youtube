// for globalRouter
export const getJoin = (req, res) => res.render("join", { pageTitle: "Join" });
export const postJoin = (req, res) => {
	console.log(req.body);
	res.end();
};
export const login = (req, res) => res.send("Login Page");
// for userRouter
export const seeProfile = (req, res) => res.send("Profile");
export const logout = (req, res) => res.send("Logout");
export const editUser = (req, res) => res.send("Edit User");
export const deleteUser = (req, res) => res.send("Delte User");
