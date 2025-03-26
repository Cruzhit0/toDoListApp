import { Task, TaskAttributes } from '@core/models/content/taskModel';

export class TaskService {
  async getAllTasks() {
    return await Task.findAll();
  }

  async createTask(taskData: TaskAttributes) {
    return await Task.create(taskData);
  }

  async getTaskById(id: number) {
    return await Task.findByPk(id);
  }

  async updateTask(id: number, data: Partial<TaskAttributes>) {
    const task = await Task.findByPk(id);
    if (!task) throw new Error('Task not found');
    return await task.update(data);
  }

  async deleteTask(id: number) {
    const task = await Task.findByPk(id);
    if (!task) throw new Error('Task not found');
    await task.destroy();
    return true;
  }

  async getTasksByUser(userId: number) {
    return await Task.findAll({
      where: { userId }
    });
  }
}