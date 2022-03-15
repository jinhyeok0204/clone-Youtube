// for globalRouter
let videos = [
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
        id: 2,
    },
    {
        title: "Third Video",
        rating: 5,
        comments: 2,
        createdAt: "2",
        views: 59,
        id: 3,
    },
];

export const recommend = (req, res) => {
    return res.render("home", { pageTitle: "Home", videos });
};

// for videoRouter
export const watchVideo = (req, res) => {
    const { id } = req.params;
    const video = videos[id - 1];
    res.render("watchvideo", { pageTitle: `Watching ${video.title}`, video });
};
export const getEdit = (req, res) => {
    const { id } = req.params;
    const video = videos[id - 1];
    res.render("editvideo", { pageTitle: `Editing ${video.title}`, video });
};

export const postEdit = (req, res) => {
    const { id } = req.params;
    const { title } = req.body;
    videos[id - 1].title = title;
    return res.redirect(`/videos/${id}`);
};
