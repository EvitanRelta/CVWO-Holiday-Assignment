import { RawUser, User } from '../types';

export default (rawUser: RawUser): User => rawUser.data;