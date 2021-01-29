"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.postPosts = void 0;
const post_model_1 = __importDefault(require("../../model/post.model"));
// Crear un post
const postPosts = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const post = new post_model_1.default(req.body);
    if (post) {
        try {
            console.log(req.body);
            try {
                if (!req.body.title)
                    return res.send("Title has no founded");
                if (!req.body.description)
                    return res.send("Description has no founded");
                if (!req.body.img)
                    return res.send("Img has no founded");
                if (!req.body.html_content)
                    return res.send("Content has no founded");
                res.send(post);
                const savedPost = yield post.save();
                res.json(savedPost);
            }
            catch (error) {
                res.send(error);
            }
        }
        catch (error) {
            res.send(error);
        }
    }
    else {
        res.json({
            error: "The post has a incorrect structure",
        });
    }
});
exports.postPosts = postPosts;
