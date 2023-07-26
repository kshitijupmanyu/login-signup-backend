const mongoose = require("mongoose");
const uniqueValidator = require("mongoose-unique-validator");

const Schema = mongoose.Schema;

const userSchema = new Schema({
    firstName:{type: String, required:true},
    lastName:{type: String, required: true},
    email: {type: String, required: true},
    password: {type: String, required: true, minLength: 6}
})

userSchema.plugin(uniqueValidator);

module.exports = mongoose.model('User', userSchema);