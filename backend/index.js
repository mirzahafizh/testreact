import cors from 'cors';
import express from 'express';
import UserRoute from './Routes/userRoutes.js';

const app = express();
app.use(express.json());
app.use(cors());
app.use(UserRoute);



app.listen(5000, ()=> console.log('listening on port'));