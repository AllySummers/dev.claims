import { NextFunction, Request, Response } from 'express';
import DevClaims from '../claims/claims';

export default class DevClaimController {
  public devclaim = (req: Request, res: Response, next: NextFunction): void => {
    const claim = DevClaims[Math.floor(Math.random()) * DevClaims.length]
    res.render('index.ejs', { claim })
  };
}