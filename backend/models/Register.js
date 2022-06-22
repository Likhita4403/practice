const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");


const RegisterSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    // confirmPassword: {
    //     type: String,
    //     required: true,
    // }
});

RegisterSchema.methods.matchPassword = async function(enteredPassword) {
    return await bcrypt.compare(enteredPassword, this.password);
};

// will encrypt password everytime its saved
// RegisterSchema.pre("save", async function(next) {
//     if (!this.isModified("password")) {
//         next();
//     }
//     const salt = await bcrypt.genSalt(10);
//     this.password = await bcrypt.hash(this.password, salt);
// });


const RegisterModel = mongoose.model("Register", RegisterSchema);
module.exports = RegisterModel;