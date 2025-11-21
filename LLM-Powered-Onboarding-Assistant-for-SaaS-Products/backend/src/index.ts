import express from 'express';
import pino from 'pino';
import dotenv from 'dotenv';
import { onboardingRouter } from './routes/onboard';

dotenv.config();
const logger = pino({ level: process.env.LOG_LEVEL || 'info' });
const app = express();
app.use(express.json());

app.use('/api/onboard', onboardingRouter);

const port = process.env.PORT ? Number(process.env.PORT) : 4000;
app.listen(port, () => {
  logger.info(`Onboarding API listening on ${port}`);
});
