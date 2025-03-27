import { Request, Response, NextFunction } from 'express';
import { TaskService } from '../services/taskService';
import { NotFoundError } from '@core/utils/customErrors';

const taskService = new TaskService();

export class TaskController {


  public async createTask(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      // const userId = (req as any).user.id;
      const taskData = { ...req.body };
      const task = await taskService.createTask(taskData);
      res.status(201).json(task);
    } catch (error) {
      next(error);
    }
  }

  public async getTaskById(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const task = await taskService.getTaskById(Number(req.params.id));
      if (!task) {
        throw new NotFoundError('Task not found');
      }
      res.status(200).json(task);
    } catch (error) {
      next(error);
    }
  }

  public async updateTask(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const task = await taskService.updateTask(Number(req.params.id), req.body);
      if (task) {
        res.status(200).json(task);
      } else {
        throw new NotFoundError('Task not found');
      }
    } catch (error) {
      next(error);
    }
  }

  public async deleteTask(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const task = await taskService.deleteTask(Number(req.params.id));
      if (task) {
        res.status(204).json({ message: 'Task deleted successfully' });
      } else {
        throw new NotFoundError('Task not found');
      }
    } catch (error) {
      next(error);
    }
  }

  public async getTasksByUser(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const userId = Number(req.params.id);
      const tasks = await taskService.getTasksByUser(userId);
      res.status(200).json(tasks);
    } catch (error) {
      next(error);
    }
  }
}