const express = require("express");
const app = express();
const mongoose = require("mongoose");
const ReviewModel = require("./models/Review");
const RegisterModel = require("./models/Register")

const cors = require("cors");

app.use(express.json());
// app.use(cors());
app.use(cors({ origin: true, credentials: true }));
mongoose.connect(
    "mongodb+srv://SaiPreeti:SaiPreeti@backendtest.wlb6s.mongodb.net/?retryWrites=true&w=majority"
);

app.get("/getReviews", (req, res) => {
    ReviewModel.find({}, (err, result) => {
        if (err) {
            res.json(err);
        } else {
            res.json(result);
        }
    });
});

app.get("/getUsers", (req, res) => {
    RegisterModel.find({}, (err, result) => {
        if (err) {
            res.json(err);
        } else {
            res.json(result);
        }
    });
});

app.post("/writeUser", async(req, res) => {
    const User = req.body;
    const newUser = new RegisterModel(User);
    await newUser.save();
    res.json(User);
});

app.post("/writeReview", async(req, res) => {
    const review = req.body;
    const newReview = new ReviewModel(review);
    await newReview.save();

    res.json(review);
});

app.listen(3001, () => {
    console.log("SERVER RUNS PERFECTLY!");
});