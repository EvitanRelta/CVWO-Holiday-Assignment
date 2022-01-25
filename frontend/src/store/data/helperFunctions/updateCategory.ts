import Lodash from 'lodash';
import { Category, CategoryWOTags } from '../../../apiClient/types';

export default (categories: Category[], newCategory: CategoryWOTags) => {
    const categoriesShallowCopy = Lodash.clone(categories);
    const categoryIndex = Lodash.findIndex(categoriesShallowCopy, { id: newCategory.id });
    const updatedCategory = {
        ...categoriesShallowCopy[categoryIndex],
        ...newCategory
    };
    categoriesShallowCopy.splice(categoryIndex, 1, updatedCategory);
    return categoriesShallowCopy;
};