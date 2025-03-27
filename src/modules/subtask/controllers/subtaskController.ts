import { Request, Response, NextFunction } from 'express';
import { SubtaskService } from '../services/subtaskService';
import { NotFoundError } from '@core/utils/customErrors';

const subtaskService = new SubtaskService();

export class SubtaskController {
  public async getAllSubtasks(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const subtasks = await subtaskService.getAllSubtasks();
      res.status(200).json(subtasks);
    } catch (error) {
      next(error);
    }
  }

  public async createSubtask(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const subtask = await subtaskService.createSubtask(req.body);
      res.status(201).json(subtask);
    } catch (error) {
      next(error);
    }
  }

  public async getSubtaskById(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const subtask = await subtaskService.getSubtaskById(Number(req.params.id));
      if (!subtask) {
        throw new NotFoundError('Subtask not found');
      }
      res.status(200).json(subtask);
    } catch (error) {
      next(error);
    }
  }

  public async updateSubtask(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const subtask = await subtaskService.updateSubtask(Number(req.params.id), req.body);
      if (subtask) {
        res.status(200).json(subtask);
      } else {
        throw new NotFoundError('Subtask not found');
      }
    } catch (error) {
      next(error);
    }
  }

  public async deleteSubtask(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const result = await subtaskService.deleteSubtask(Number(req.params.id));
      if (result) {
        res.status(204).json({ message: 'Subtask deleted successfully' });
      } else {
        throw new NotFoundError('Subtask not found');
      }
    } catch (error) {
      next(error);
    }
  }

  public async getSubtasksByTask(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const taskId = Number(req.params.taskId);
      const subtasks = await subtaskService.getSubtasksByTask(taskId);
      res.status(200).json(subtasks);
    } catch (error) {
      next(error);
    }
  }

  public async toggleSubtaskComplete(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const subtask = await subtaskService.toggleComplete(Number(req.params.id));
      res.status(200).json(subtask);
    } catch (error) {
      next(error);
    }
  }
}