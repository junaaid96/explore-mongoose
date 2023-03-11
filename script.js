const mongoose = require("mongoose");
const User = require("./Schemas/User.js");

mongoose.connect("mongodb://127.0.0.1:27017/testdb");

run();
async function run() {
    try {
        const user = await User.create({
            name: "junaid",
            age: 26,
            email: "info.junaidulislam@gmail.com",
            hobbies: ["cycling, coding, travelling"],
            address: {
                street: "abd",
                city: "ctg",
            },
        });
        console.log(user);
    } catch (e) {
        console.log(e.message);
    }
}
