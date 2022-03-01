import 'dotenv/config';
import express from 'express';
import session from 'express-session';
import 'express-async-errors';
import 'dotenv/config';
import cors from 'cors';
import routes from './routes';
import ErrorHandler from './services/errorHandler';
const port = 8080;
const app = express()
app.use((session({
    resave: false, // don't save session if unmodified
    saveUninitialized: false, // don't create session until something stored
    secret: process.env.SESSION_SECRET as string,
})))
app.use(cors());
app.use(express.json());
app.use(routes);
app.use(ErrorHandler);
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
})