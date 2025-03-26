import { DataTypes, Model } from 'sequelize';
import sequelize from '@core/config/database';


interface SubtaskAttributes {
  id?: number;
  description: string;
  isCompleted: boolean;
  taskId: number;
}

class Subtask extends Model<SubtaskAttributes> implements SubtaskAttributes {
  public id!: number;
  public description!: string;
  public isCompleted!: boolean;
  public taskId!: number;
}

Subtask.init(
  {
    description: { type: DataTypes.STRING, allowNull: false },
    isCompleted: { type: DataTypes.BOOLEAN, defaultValue: false },
    taskId: { type: DataTypes.INTEGER, allowNull: false },
  },
  { sequelize, modelName: 'Subtask' }
);


export {Subtask, SubtaskAttributes};