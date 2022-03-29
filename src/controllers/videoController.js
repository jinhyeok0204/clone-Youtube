import Video from "../models/Video";

// for globalRouter
export const home = async (req, res) => {
    const videos = await Video.find({});
    return res.render("home", {pageTitle: "Home", videos});
};
// for videoRouter
export const watchVideo = (req, res) => {
    const { id } = req.params;
    res.render("watchvideo", { pageTitle: `Watching` });
};
export const getEdit = (req, res) => {
    const { id } = req.params;
    res.render("editvideo", { pageTitle: `Editing` });
};

export const postEdit = (req, res) => {
    const { id } = req.params;
    const { title } = req.body;
    return res.redirect(`/videos/${id}`);
};

export const getUpload = (req, res) => {
    return res.render("upload", { pageTitle: "Upload" });
};

export const postUpload = async (req, res) => {
    const {title, description, hashtags} = req.body;
    try{
        await Video.create({
            title,
            description,
            createdAt: Date.now(),
            hashtags: hashtags.split(", ").map((word) => `#${word}`),
            meta:{
                views: 0,
                rating:0,
            },
        });
    } catch(error){
        console.log(error);
        return req.render("upload", {pageTitle: "Upload Video"});
    }
    return res.redirect("/");
};
