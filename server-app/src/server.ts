import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import connectDb from './config/dbConfig';
import shortUrl from './routes/shortUrl';

dotenv.config();
connectDb();

const PORT = process.env.PORT || 5001;

const app = express();

// CORS middleware
app.use(cors({
    origin: "*", 
    credentials: true,
}));

// Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use('/api', shortUrl);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
