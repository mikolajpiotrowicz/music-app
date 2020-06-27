import { Router } from 'express';
import { Request, Response } from '../models/express';
import { AppRouter } from './index';
import { requestValidatorMiddleware } from '../middleware/requestValidatorMiddleware';
import { musicDownloadMiddleware } from '../middleware/musicDownloadMiddleware';
import { S3uploadMiddleware } from '../middleware/s3uploadMiddleware';
import { thumbnailDownloadMiddleware } from '../middleware/thumbnailDownloadMiddleware';
import { thumbnailRenameMiddleware } from '../middleware/thumbnailRenameMiddleware';
import { serveDebugMiddleware } from '../middleware/serveDebugMiddleware';

export default createApiRouter;

function createApiRouter({ log, config }: AppRouter) {
  const router = Router();

  (router as any).post(
    '/music/process',
    requestValidatorMiddleware({ logger: log }),
    musicDownloadMiddleware({ config, logger: log }),
    thumbnailDownloadMiddleware({ config }),
    thumbnailRenameMiddleware({ config }),
    S3uploadMiddleware({ config, logger: log }),
  );

  (router as any).get('/debug', serveDebugMiddleware({ config }));

  router.all('/', (_req: Request, res: Response) => {
    res.sendStatus(405);
  });

  return router;
}
