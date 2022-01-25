import Lodash from 'lodash';
import { Category, Tag } from '../../../apiClient/types';

export default (categories: Category[], categoryId: number, tag: Tag) => {
    const categoriesShallowCopy = Lodash.clone(categories);
    const categoryIndex = Lodash.findIndex(categoriesShallowCopy, { id: categoryId });
    const category = categoriesShallowCopy[categoryIndex];
    const updatedCategory = {
        ...category,
        tags: category.tags.concat([tag])
    };
    categoriesShallowCopy.splice(categoryIndex, 1, updatedCategory);
    return categoriesShallowCopy;
};