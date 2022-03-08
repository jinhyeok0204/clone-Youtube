// for globalRouter
export const recommend = (req, res) => res.render("home");
export const search = (req, res) => res.send("Search Videos");
// for videoRouter
export const seeVideo = (req, res) => {
    res.render("seevideo");
};
export const editVideo = (req, res) => res.render("editvideo");
export const uploadVideo = (req, res) => res.send("Upload Video");
export const deleteVideo = (req, res) => res.send("Delete Video");
