// Package Imports
import { validationResult } from 'express-validator';
import { Request, Response, NextFunction } from 'express';
import { logger } from '../utils/logger';

export const resultChecker = (req: Request, res: Response, next: NextFunction) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
logger.info(errors.array());
        return res.status(400).json({ errors: errors.array() });
    }
    next();
};
