import { Request, Response, NextFunction } from 'express';
import { UserService } from '../services/userService';
import { NotFoundError } from '@core/utils/customErrors';

const userService = new UserService();

export class UserController {
  public async getAllUsers(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const users = await userService.getAllUsers();
      res.status(200).json(users);
    } catch (error) {
      next(error);
    }
  }

  public async createUser(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const user = await userService.createUser(req.body);
      res.status(201).json(user);
    } catch (error) {
      next(error);
    }
  }

  public async getUserById(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const user = await userService.getUserById(Number(req.params.id));
      if (!user) {
        throw new NotFoundError('User not found');
      }
      res.status(200).json(user);
    } catch (error) {
      next(error);
    }
  }

  public async updateUser(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const user = await userService.updateUser(Number(req.params.id), req.body);
      if (user) {
        res.status(200).json(user);
      } else {
        throw new NotFoundError('User not found');
      }
    } catch (error) {
      next(error);
    }
  }

  public async deleteUser(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const user = await userService.deleteUser(Number(req.params.id));
      if (user) {
        res.status(204).json({ message: 'User deleted successfully' });
      } else {
        throw new NotFoundError('User not found');
      }
    } catch (error) {
      next(error);
    }
  }
}