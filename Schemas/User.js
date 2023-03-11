const mongoose = require("mongoose");
const addressSchema = require("./Address.js");

const userSchema = new mongoose.Schema({
    name: String,
    age: { type: Number, min: 1 },
    email: { type: String, required: true, lowercase: true },
    createdAt: { type: Date, immulatable: true, default: () => Date.now() },
    updatedAt: { type: Date, immutable: true, default: () => Date.now() },
    bestFriend: mongoose.SchemaTypes.ObjectId,
    hobbies: [String],
    address: addressSchema,
});

module.exports = mongoose.model("User", userSchema);
