import mongoose from "mongoose";

const videoSchema = new mongoose.Schema({
    title: {type:Date, required: true},
    description: String,
    createdAt: {type:Date, required:true},
    hashtags: [{type:String}],
    meta: {
        views: Number,
        rating: Number,
    },
});

const movieModel = mongoose.model("Video", videoSchema);
export default movieModel;
