import Lodash from 'lodash';
import { Task, TaskWOCategories } from '../../../apiClient/types';

export default (tasks: Task[], newTask: TaskWOCategories) => {
    const tasksShallowCopy = Lodash.clone(tasks);
    const taskIndex = Lodash.findIndex(tasksShallowCopy, { id: newTask.id });
    const updatedTask = {
        ...tasksShallowCopy[taskIndex],
        ...newTask
    };
    tasksShallowCopy.splice(taskIndex, 1, updatedTask);
    return tasksShallowCopy;
};