"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var morgan_1 = __importDefault(require("morgan"));
var path_1 = __importDefault(require("path"));
var routes_1 = __importDefault(require("./routes"));
var app = express_1.default();
app.set('port', process.env.PORT || 3666);
app.use(morgan_1.default('dev'));
//app.use(urlencoded({extended: false}))
//app.use(json())
app.use(routes_1.default);
app.use(express_1.default.static(path_1.default.join(__dirname, '../public')));
exports.default = app;
