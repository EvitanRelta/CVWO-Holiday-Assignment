import Lodash from 'lodash';
import { Category, Tag } from '../../../apiClient/types';
import insertByIndex from './insertByIndex';

export default (categories: Category[], categoryId: number, tag: Tag) => {
    const categoryIndex = Lodash.findIndex(categories, { id: categoryId });
    const category = categories[categoryIndex];
    const updatedCategory = {
        ...category,
        tags: category.tags.concat([tag])
    };
    return insertByIndex(categories, categoryIndex, updatedCategory) as Category[];
};