import { Router } from 'express';
import { AuthController } from '@/app/controllers/auth.controller';
import { CreateUserDto } from '@/app/dtos/users.dto';
import { Routes } from '@/app/interfaces/routes.interface';
import { AuthMiddleware } from '@/app/middlewares/auth.middleware';
import { ValidationMiddleware } from '@/app/middlewares/validation.middleware';

export class AuthRoute implements Routes {
  public router = Router();
  public auth = new AuthController();

  constructor() {
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router.post('/signup', ValidationMiddleware(CreateUserDto), this.auth.signUp);
    this.router.post('/login', ValidationMiddleware(CreateUserDto), this.auth.logIn);
    this.router.post('/logout', AuthMiddleware, this.auth.logOut);
  }
}
