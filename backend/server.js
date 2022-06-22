const express = require("express");
const app = express();
const mongoose = require("mongoose");
const jwt = require('jsonwebtoken')
const ReviewModel = require("./models/Review");
const RegisterModel = require("./models/Register")
const bcrypt = require("bcryptjs");

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

app.post('/Login', async(req, res) => {
    console.log("hjfghj")
    console.log(req.body)
    const user = await RegisterModel.findOne({
        email: req.body.email,
    })

    if (!user) {
        return { status: 'error', error: 'Invalid login' }
    }

    const isPasswordValid = req.body.password === user.password
        // bcrypt.compare(
        //     req.body.password,
        //     user.password
        // )
    console.log(isPasswordValid)
    if (isPasswordValid) {
        // res.send("ok")
        console.log("ok")
        const token = jwt.sign({
                name: user.name,
                email: user.email,
            },
            'secret123'
        )
        console.log(token)

        return res.json({ status: 'ok', user: token })
    } else {
        return res.json({ status: 'error', user: false })
    }
})

app.listen(3001, () => {
    console.log("SERVER RUNS PERFECTLY!");
});