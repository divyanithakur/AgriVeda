import express from 'express';
import axios from 'axios';
import dotenv from 'dotenv';

dotenv.config();

const router = express.Router();

router.get('/forecast', async (req, res) => {
  try {
    const { lat, lon } = req.query;
    // Mock weather data for the dashboard
    const mockForecast = {
      current: {
        temp: 28,
        humidity: 65,
        wind_speed: 12,
        weather: "Partly Cloudy",
        rain_probability: 70
      },
      daily: [
        { day: 'Mon', temp: 28, condition: 'cloudy', icon: 'cloud' },
        { day: 'Tue', temp: 26, condition: 'rain', icon: 'rain' },
        { day: 'Wed', temp: 29, condition: 'sunny', icon: 'sun' },
        { day: 'Thu', temp: 30, condition: 'sunny', icon: 'sun' },
        { day: 'Fri', temp: 27, condition: 'scattered thunderstorms', icon: 'storm'}
      ],
      alerts: [
        { type: 'warning', message: 'High probability of rain on Tuesday. Delay non-critical irrigation.' }
      ]
    };

    res.json(mockForecast);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch weather data' });
  }
});

export default router;
