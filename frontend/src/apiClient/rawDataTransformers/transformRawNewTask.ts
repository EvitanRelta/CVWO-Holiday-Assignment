import { CategorySimplified, RawNewTask, RawTasks, Task } from '../types';

export default ({ id, title, description, created_at, updated_at }: RawNewTask): Task => ({
    id, title, description,
    created_at: new Date(created_at),
    updated_at: new Date(updated_at),
    categories: []
});