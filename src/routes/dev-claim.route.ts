import { Router } from 'express';
import DevClaimController from '../controllers/dev-claim.controller';
import Route from '../interfaces/routes.interface';

export default class DevClaimRoute implements Route {
  public path = '/';
  public router = Router();
  public controller = new DevClaimController();

  constructor() {
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router.get('/', this.controller.devclaim);
  }
}