// for globalRouter
export const recommend = (req, res) => {
    const videos = [
        {
            title: "First Video",
            rating: 5,
            comments: 2,
            createdAt: "2",
            views: 59,
            id: 1,
        },
        {
            title: "Second Video",
            rating: 5,
            comments: 2,
            createdAt: "2",
            views: 59,
            id: 1,
        },
        {
            title: "Third Video",
            rating: 5,
            comments: 2,
            createdAt: "2",
            views: 59,
            id: 1,
        },
    ];
    return res.render("home", { pageTitle: "Home", videos });
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
