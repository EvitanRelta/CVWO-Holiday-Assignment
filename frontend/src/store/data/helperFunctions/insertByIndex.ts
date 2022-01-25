import { Category, Tag, Task } from '../../../apiClient/types';

export default (array: Task[] | Category[] | Tag[], index: number, obj: Task | Category | Tag) => [
    ...array.slice(0, index),
    obj,
    ...array.slice(index + 1)
];