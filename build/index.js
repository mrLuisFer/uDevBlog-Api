"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = express_1.default();
const morgan_1 = __importDefault(require("morgan"));
const routes_1 = __importDefault(require("./routes/routes"));
const database_1 = require("./db/database");
const cors_1 = __importDefault(require("cors"));
// Here is the function fro connect the db
database_1.connectToDb();
const PORT = 4000 || process.env.DB_PORT;
app.set("port", PORT);
// port variable
const port = app.get("port");
// Middlewares
app.use(morgan_1.default("dev"));
app.use(cors_1.default());
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: false }));
app.use(express_1.default.static(__dirname + "/public"));
app.listen(port, () => {
    console.log("- Server on port", port);
});
// Routes
routes_1.default(app);
