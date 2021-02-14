import 'dotenv/config';
import App from './app';
import DevClaimRoute from './routes/dev-claim.route';
import validateEnv from './utils/validateEnv';

const routes = [
  new DevClaimRoute()
]

validateEnv();

const app = new App(routes);

app.listen();
