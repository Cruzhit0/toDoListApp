import { DataTypes, Model } from 'sequelize';
import sequelize from '@core/config/database';

interface TaskAttributes {
  id?: number;
  title: string;
  description: string;
  dueDate: Date;
  userId: number;
}

class Task extends Model<TaskAttributes> implements TaskAttributes {
  public id!: number;
  public title!: string;
  public description!: string;
  public dueDate!: Date;
  public userId!: number;
}

Task.init(
  {
    title: { type: DataTypes.STRING, allowNull: false },
    description: { type: DataTypes.TEXT },
    dueDate: { type: DataTypes.DATE },
    userId: { type: DataTypes.INTEGER, allowNull: false },
  },
  { sequelize, modelName: 'Task', paranoid: true }
);

export { Task, TaskAttributes};