// for globalRouter
export const recommend = (req, res) => {
    res.render("home", { pageTitle: "Home" });
};
export const search = (req, res) => {
    res.send("Search Videos");
};
// for videoRouter
export const seeVideo = (req, res) => {
    res.render("seevideo", { pageTitle: "seeVideo" });
};
export const editVideo = (req, res) => {
    res.render("editvideo", { pageTitle: "editVideo" });
};
export const uploadVideo = (req, res) => res.send("Upload Video");
export const deleteVideo = (req, res) => res.send("Delete Video");
