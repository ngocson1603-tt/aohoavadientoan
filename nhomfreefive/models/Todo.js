const mongoose = require("mongoose");

const TodoSchema = new mongoose.Schema({
    todo: {
        type: String
    },
    ms: {
        type: String
    },
    ten: {
        type: String
    },
    hinh: {
        type: String
    }
});

module.exports = new mongoose.model("Todo", TodoSchema);
