import { Category, Tag, Task } from '../../../../apiClient/types';
import Lodash from 'lodash';

export default (tasks: Task[]): Category[] => {
    const allCategories = tasks.reduce(
        (acc, task) => acc.concat(task.categories),
        [] as Category[]
    );
    const allTags = allCategories.reduce(
        (acc, category) => acc.concat(category.tags),
        [] as Tag[]
    );
    const getCategoryById = (id: number) => allCategories.find(category => category.id === Number(id));
    return Lodash(allTags)
        .uniqBy(tag => tag.id)
        .groupBy(tag => tag.category_id)
        .map((tags, categoryId) => ({
            ...getCategoryById(Number(categoryId)),
            tags
        }))
        .value() as Category[];
};