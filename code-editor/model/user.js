import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
    fname: {
        type: String,
        required: [true, "Full name is required"],
        minLength: [4, "Full name should be atleast 4 characters long"],
        maxLength: [30, "Full name should be less than 30 characters"]
    },
    email: {
        type: String,
        unique: true,
        required: [true, "Email is required"],
        match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, "Invalid email address"]
    },
    password: {
        type: String,
        required: [true, "Password is required"],
        select: false
    }
})

module.exports = mongoose.models.User || mongoose.model('User', UserSchema)