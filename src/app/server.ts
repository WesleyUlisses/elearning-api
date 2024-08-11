import { App } from '@/app/app';
import { AuthRoute } from '@/app/routes/auth.route';
import { UserRoute } from '@/app/routes/users.route';
import { ValidateEnv } from '@/shared/utils/validateEnv';

ValidateEnv();

const app = new App([new AuthRoute(), new UserRoute()]);

app.listen();
