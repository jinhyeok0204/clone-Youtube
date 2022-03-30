import Video from "../models/Video";

// for globalRouter
export const home = async (req, res) => {
	const videos = await Video.find({});
	return res.render("home", { pageTitle: "Home", videos });
};
// for videoRouter
export const watchVideo = async (req, res) => {
	const { id } = req.params;
	const video = await Video.findById(id);

	if (!video) {
		return res.render("404", { pageTitle: "Video not found" });
	}
	return res.render("watchvideo", { pageTitle: video.title, video });
};
export const getEdit = async (req, res) => {
	const { id } = req.params;
	const video = await Video.findById(id);
	if (!video) {
		return res.render("404", { pageTitle: "Video not found." });
	}
	return res.render("editvideo", { pageTitle: `Edit ${video.title}`, video });
};

export const postEdit = async (req, res) => {
	const { id } = req.params;
	const { title, description, hashtags } = req.body;
	const video = await Video.findById(id);

	if (!video) {
		return res.render("404", { pageTitle: "Video not found", video });
	}

	video.title = title;
	video.description = description;
	video.hashtags = hashtags
		.split(", ")
		.map((word) => (word.startsWith("#") ? word : `#${word}`));
	await video.save();

	return res.redirect(`/videos/${id}`);
};

export const getUpload = (req, res) => {
	return res.render("upload", { pageTitle: "Upload" });
};

export const postUpload = async (req, res) => {
	const { title, description, hashtags } = req.body;
	try {
		await Video.create({
			title,
			description,
			createdAt: Date.now(),
			hashtags: hashtags.split(", ").map((word) => `#${word}`),
			meta: {
				views: 0,
				rating: 0,
			},
		});
	} catch (error) {
		console.log(error);

		return req.render("upload", {
			pageTitle: "Upload Video",
			errorMessage: error._message,
		});
	}
	return res.redirect("/");
};
