"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const cors_1 = __importDefault(require("cors"));
const dbConfig_1 = __importDefault(require("./config/dbConfig"));
const shortUrl_1 = __importDefault(require("./routes/shortUrl"));
dotenv_1.default.config();
(0, dbConfig_1.default)();
const PORT = process.env.PORT || 5001;
const app = (0, express_1.default)();
// CORS middleware
app.use((0, cors_1.default)({
    origin: "http://127.0.0.1:3000",
    credentials: true,
}));
// Middlewares
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
// Routes
app.use('/api', shortUrl_1.default);
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
