import express from 'express';
import dotenv from 'dotenv';
import connect from './config/db.js';

import userRoutes from './routes/userRoutes.js';

dotenv.config();

const app = express();
app.use(express.json());

connect();

app.use('/api/users', userRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });