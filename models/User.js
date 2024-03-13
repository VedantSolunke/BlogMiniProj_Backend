const mongoose = require('mongoose');
const { Schema, model } = mongoose;

const UserSchema = new Schema({
    fullName: { type: String, required: true },
    username: { type: String, required: true, unique: true, minlength: 4 },
    email: { type: String, required: true, unique: true },
    phoneNo: { type: String },
    password: { type: String, required: true },
});

const UserModel = model('User', UserSchema);

module.exports = UserModel;
