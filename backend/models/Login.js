const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");


const LoginSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
});



// will encrypt password everytime its saved
// LoginSchema.pre("save", async function(next) {
//     if (!this.isModified("password")) {
//         next();
//     }
//     const salt = await bcrypt.genSalt(10);
//     this.password = await bcrypt.hash(this.password, salt);
// });


const LoginModel = mongoose.model("Login", LoginSchema);
module.exports = LoginModel;