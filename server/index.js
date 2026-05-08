import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import chatbotRoutes from './routes/chatbot.js';
import weatherRoutes from './routes/weather.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// Routes
app.use('/api/chatbot', chatbotRoutes);
app.use('/api/weather', weatherRoutes);

app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', message: 'AgriVeda API is running smoothly.' });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
