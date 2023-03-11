const mongoose = require("mongoose");
const addressSchema = require("./Address.js");

const userSchema = new mongoose.Schema({
    name: String,
    age: {
        type: Number,
        // min: 1,
        // max:100,
        validate: {
            validator: (v) => v > 0,
            message: (props) =>
                `You entered ${props.value}. Age cannot be a negative number!`,
        },
    },
    email: { type: String, required: true, lowercase: true, minLength: 5 },
    createdAt: { type: Date, immutable: true, default: () => Date.now() },
    updatedAt: { type: Date, immutable: true, default: () => Date.now() },
    bestFriend: mongoose.SchemaTypes.ObjectId,
    hobbies: [String],
    address: addressSchema,
});

module.exports = mongoose.model("User", userSchema);
