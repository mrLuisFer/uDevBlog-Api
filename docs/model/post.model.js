"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const Post = new mongoose_1.Schema({
    title: {
        type: String,
        required: true,
        trim: true,
    },
    description: {
        type: String,
        required: true,
        trim: true,
    },
    img: {
        type: String,
        trim: true,
    },
    categories: {
        type: Array,
        trim: true,
    },
    html_content: {
        type: String,
        trim: true,
    },
}, {
    versionKey: false,
    timestamps: true,
});
exports.default = mongoose_1.model("posts", Post);
