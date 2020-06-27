import { Router } from 'express';
import { Config } from '../../infra/config';
import { WinstonCompatibleLoggerInterface } from '../../infra/logger';
import { Request, Response } from '../models/express';
import { renderClient } from '../renderClient';
import { ParsedVibrantColors } from '../../app/services/parseVibrantColors';
import { AppRouter } from './index';

export default createRouter;

function createRouter({ log, config }: AppRouter) {
  const router = Router();

  (router as any).get('/', (req: Request, res: Response) => {
    const initialData = {
      currentTime: 0,
      carouselRotation: 0,
    };

    renderClient(req, res, initialData);
  });

  (router as any).get('/debug', (req: Request, res: Response) => {
    const initialData = {
      currentTime: 0,
      carouselRotation: 0,
    };

    renderClient(req, res, initialData);
  });

  router.all('/', (_req: Request, res: Response) => {
    res.sendStatus(405);
  });

  return router;
}
