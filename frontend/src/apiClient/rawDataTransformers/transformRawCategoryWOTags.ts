import { CategoryWOTags, RawCategoryWOTags } from '../types';

export default ({ id, name }: RawCategoryWOTags): CategoryWOTags => ({ id, name });