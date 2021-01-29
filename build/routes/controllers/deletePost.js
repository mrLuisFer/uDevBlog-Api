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
exports.deletePost = void 0;
const post_model_1 = __importDefault(require("../../model/post.model"));
// Eliminando el post
const deletePost = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    console.log(req.params);
    const id = req.params.id;
    if (!id)
        return res.status(404).send("The id was not found");
    else {
        try {
            const article = yield post_model_1.default.findByIdAndDelete(id);
            if (!article)
                return res.status(204).json({ post: "no founded" });
            return res.send(article);
        }
        catch (error) {
            res.send(error);
        }
    }
});
exports.deletePost = deletePost;
