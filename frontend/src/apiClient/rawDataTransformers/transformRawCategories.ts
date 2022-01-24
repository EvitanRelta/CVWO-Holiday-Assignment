import { Category, RawCategories } from '../types';

export default (rawCategories: RawCategories): Category[] => {
    return rawCategories.map(({ id, name, tags: rawTags }) => ({
        id, name,
        tags: rawTags.map(({ id, name, category_id }) => ({
            id, name, category_id
        }))
    }))
};