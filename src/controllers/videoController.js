// for globalRouter
export const recommend = (req, res) => res.send("Recommended Videos");
export const search = (req, res) => res.send("Search Videos");
// for videoRouter
export const seeVideo = (req, res) => {
    console.log(req.params);
    return res.send("Watch Videos");
};
export const editVideo = (req, res) => res.send("Edit Videos");
export const uploadVideo = (req, res) => res.send("Upload Video");
export const deleteVideo = (req, res) => res.send("Delete Video");
