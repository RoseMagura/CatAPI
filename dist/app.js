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
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const images_1 = require("./routes/images");
const docs_1 = require("./routes/docs");
const likes_1 = require("./routes/likes");
const comments_1 = require("./routes/comments");
const users_1 = require("./routes/users");
const index_1 = require("./auth/index");
const path = require("path");
dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());
if (process.env.NODE_ENV === "production") {
    app.use(express.static(path.resolve('build')));
}
app.get('/', (req, res) => {
    // res.sendFile(__dirname + '/../build/index.html');
    res.sendFile(path.resolve('build/index.html'));
});
app.post("/login", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    console.log("req.body", req.body);
    const { username, password } = req.body;
    yield index_1.issueToken(username, password, res);
}));
app.use("/images", images_1.default);
app.use("/api-docs", docs_1.default);
app.use("/likes", likes_1.default);
app.use("/comments", comments_1.default);
app.use("/users", users_1.default);
// // Handle 404 errors
// app.use((req: Request, res: Response) => {
//     res.status(404).send('Unable to find that page');
// });
exports.default = app;
