import express from 'express';
import dotenv from 'dotenv';

import authRoutes from './routes/authRoutes';
import messageRoutes from './routes/messageRoutes';

dotenv.config();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api/v1', authRoutes);
app.use('/api/v1', messageRoutes);

app.get('/', (req, res) => res.status(200).send('<h2>Hello World!</h2>'));
app.get('*', (req, res) => res.status(404).json({ message: 'Page Not Found' }));

// const PORT = 5000;

app.listen(process.env.PORT || 5000, () => {
  console.log(`Server started on Port ${process.env.PORT}`);
});

export default app;
