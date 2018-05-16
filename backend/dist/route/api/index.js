"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const Student_1 = __importDefault(require("./Student"));
const Course_1 = __importDefault(require("./Course"));
const Batch_1 = __importDefault(require("./Batch"));
const Subject_1 = __importDefault(require("./Subject"));
const Teacher_1 = __importDefault(require("./Teacher"));
const route = express_1.Router();
route.use('/students', Student_1.default);
route.use('/courses', Course_1.default);
route.use('/batches', Batch_1.default);
route.use('/subjects', Subject_1.default);
route.use('/teachers', Teacher_1.default);
exports.default = route;
