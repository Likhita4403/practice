const mongoose = require("mongoose");

const ReviewSchema = new mongoose.Schema({
    description: {
        type: String,
        required: true,
    },
    author: {
        type: String,
        required: true,
    },
    role: {
        type: String,
    },
    date_posted: {
        type: String,
        timestamps: true,
    }
});

const ReviewModel = mongoose.model("Review", ReviewSchema);
module.exports = ReviewModel;