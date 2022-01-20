import { CategorySimplified, RawTasks, Task } from '../types';

export default (rawTasks: RawTasks): Task[] => {
    return rawTasks.map(rawTask => {
        const { id, title, description, created_at, updated_at, categories } = rawTask;
        const transformedCategories: CategorySimplified[] = [];
        for (const [categoryName, tags] of Object.entries(categories))
            transformedCategories.push({
                id: tags[0].category_id,
                name: categoryName,
                tags
            })
        return {
            id, title, description,
            created_at: new Date(created_at),
            updated_at: new Date(updated_at),
            categories: transformedCategories
        };
    });
};