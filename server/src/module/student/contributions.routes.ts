import { Router } from 'express';
import { ContributionsController } from './contributions.controller.js';
import { authMiddleware } from '../../middleware/auth.middleware.js';

const contributionsRouter = Router();
const contributionsController = new ContributionsController();

contributionsRouter.get('/', authMiddleware, contributionsController.getDashboard.bind(contributionsController));

export default contributionsRouter;
