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
exports.connectToDb = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const dbName = process.env.DB_NAME;
const password = process.env.DB_PASSWORD;
const user = process.env.DB_USER;
const collection = process.env.DB_COLLECTION;
// This connect to the bd
const connectToDb = () => __awaiter(void 0, void 0, void 0, function* () {
    const URL = `mongodb+srv://${user}:${password}@${collection}.mongodb.net/${dbName}?retryWrites=true&w=majority`;
    if (URL) {
        try {
            const db = yield mongoose_1.default.connect(`${URL}`, {
                useUnifiedTopology: true,
                useNewUrlParser: true,
                user: user,
                useFindAndModify: false,
            });
            console.log(`- ${db.connection.name} in MongoDB Connected!`);
            const collections = db.connection.collection("uDevBlog").collectionName;
            console.log(`- The collection is ${collections}`);
        }
        catch (error) {
            console.error(error);
        }
    }
    else {
        console.log("URL isn't founded");
    }
});
exports.connectToDb = connectToDb;
