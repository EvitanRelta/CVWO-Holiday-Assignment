import Lodash from 'lodash';
import { Task, TaskWOCategories } from '../../../apiClient/types';
import insertByIndex from './insertByIndex';

export default (tasks: Task[], newTask: TaskWOCategories) => {
    const taskIndex = Lodash.findIndex(tasks, { id: newTask.id });
    const updatedTask = {
        ...tasks[taskIndex],
        ...newTask
    };
    return insertByIndex(tasks, taskIndex, updatedTask) as Task[];
};