import {User }from "./content/userModel";
import {Task }from "./content/taskModel";
import {Subtask} from "./content/subtaskModel";


// Definir relaciones

    // Relación 1:N entre User y Task
    User.hasMany(Task, { foreignKey: 'userId' });
    Task.belongsTo(User, { foreignKey: 'userId' });
    // Relación 1:N entre Task y Subtask
    Task.hasMany(Subtask, { foreignKey: 'taskId' });
    Subtask.belongsTo(Task, { foreignKey: 'taskId' });


export {
    User,
    Task,
    Subtask
  };