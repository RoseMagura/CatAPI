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
const initDB_1 = require("./initDB");
dotenv.config();
const app = express();
app.use(cors());
const port = process.env.PORT || 3000;
app.get('/', (req, res) => {
    res.send(JSON.stringify('Send a request to the backend'));
});
app.get('/all', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const all = yield initDB_1.query('SELECT * FROM IMAGES;');
    res.send(all.rows);
}));
app.get('/id/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.params.id;
    const image = yield initDB_1.query(`SELECT * FROM IMAGES WHERE id=${id}`);
    res.send(image.rows);
}));
app.listen(port, () => {
    initDB_1.setUp();
    console.log(`App listening at http://localhost:${port}`);
});
