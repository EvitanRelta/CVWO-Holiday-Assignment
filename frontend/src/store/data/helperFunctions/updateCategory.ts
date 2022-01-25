import Lodash from 'lodash';
import { Category, CategoryWOTags } from '../../../apiClient/types';
import insertByIndex from './insertByIndex';

export default (categories: Category[], newCategory: CategoryWOTags) => {
    const categoryIndex = Lodash.findIndex(categories, { id: newCategory.id });
    const updatedCategory = {
        ...categories[categoryIndex],
        ...newCategory
    };
    return insertByIndex(categories, categoryIndex, updatedCategory) as Category[];
};