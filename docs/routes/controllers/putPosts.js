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
exports.putPost = void 0;
const post_model_1 = __importDefault(require("../../model/post.model"));
// Actualica un post
const putPost = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.params.id;
    const body = req.body;
    if (!id)
        return res.status(404).send("id has no founded");
    if (!body)
        return res.status(404).send("Body has no founded");
    if (id && body) {
        const postUpdated = yield post_model_1.default.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
        });
        if (!postUpdated)
            return res.status(204).json();
        res.json(postUpdated);
    }
    else {
        res.send("Some error");
    }
});
exports.putPost = putPost;
