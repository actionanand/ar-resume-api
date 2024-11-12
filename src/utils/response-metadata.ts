import { Request, Response, NextFunction } from 'express';

export function addResponseMetaData(
  req: Request,
  res: Response,
  next: NextFunction,
) {
  res.set({
    server: 'ar-resume-api',
    Author: 'Anand Raja',
  });
  next();
}
