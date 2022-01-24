import { RawTaskWOCategories, TaskWOCategories } from '../types';

export default ({ id, title, description, created_at, updated_at }: RawTaskWOCategories): TaskWOCategories => ({
    id, title, description,
    created_at: new Date(created_at),
    updated_at: new Date(updated_at)
});