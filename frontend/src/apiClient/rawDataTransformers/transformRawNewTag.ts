import { RawTag, Tag } from '../types';

export default ({ id, name, category_id }: RawTag): Tag => ({ id, name, category_id });