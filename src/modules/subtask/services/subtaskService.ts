import { Subtask, SubtaskAttributes } from '@core/models/content/subtaskModel';

export class SubtaskService {
  async getAllSubtasks() {
    return await Subtask.findAll();
  }

  async createSubtask(subtaskData: SubtaskAttributes) {
    return await Subtask.create(subtaskData);
  }

  async getSubtaskById(id: number) {
    return await Subtask.findByPk(id);
  }

  async updateSubtask(id: number, data: Partial<SubtaskAttributes>) {
    const subtask = await Subtask.findByPk(id);
    if (!subtask) throw new Error('Subtask not found');
    return await subtask.update(data);
  }

  async deleteSubtask(id: number) {
    const subtask = await Subtask.findByPk(id);
    if (!subtask) throw new Error('Subtask not found');
    await subtask.destroy();
    return true;
  }

  async getSubtasksByTask(taskId: number) {
    return await Subtask.findAll({
      where: { taskId }
    });
  }

  async toggleComplete(id: number) {
    const subtask = await Subtask.findByPk(id);
    if (!subtask) throw new Error('Subtask not found');
    return await subtask.update({
      isCompleted: !subtask.isCompleted
    });
  }
}