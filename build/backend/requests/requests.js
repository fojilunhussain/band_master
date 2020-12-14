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
const express_1 = __importDefault(require("express"));
const cookie_parser_1 = __importDefault(require("cookie-parser"));
const controller_1 = require("backend/db/controller");
var app = express_1.default();
// app.use(logger("dev"));
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
app.use(cookie_parser_1.default());
app.post('/users', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { userId } = req.body;
        // const user = await User.create({ userId })
        const user = new controller_1.DB.Models.User({
            userId: req.body.userId
        });
        res.status(201).json({
            status: 'success',
            data: {
                userId
            }
        });
    }
    catch (err) {
        res.status(400).json({
            status: 'fail',
            message: 'Unable to create user'
        });
    }
    ;
}));
app.get('/', function (req, res) {
    res.send('Hello');
});
app.listen(3000, function () {
    console.log('Listening on port 3000');
});
//# sourceMappingURL=requests.js.map