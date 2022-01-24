import { RawTaskWOCategories, RawTasks, RawUser, Task, User, UserInfoOptions, Tag, RawTag, Category, RawCategoryWOTags, CategoryWOTags, TaskWOCategories, RawCategories } from './types';
import { AuthAxiosInstance } from './getAuthAxiosInstance';
import { transformRawUser, transformRawTasks, transformRawTaskWOCategories, transformRawNewTag, transformRawCategoryWOTags, transformRawCategories } from './rawDataTransformers';
import Lodash from 'lodash';
import signInErrorTransformer from './errorHandlers/signInErrorTransformer';
import signupErrorTransformer from './errorHandlers/signupErrorTransformer';


export type AuthMethods = {
    hasAuthTokens: () => boolean;
    validateToken: () => Promise<User>;
    emailSignUp: (email: string, password: string, passwordConfirmation: string, userInfoOptions?: UserInfoOptions) => Promise<User>;
    emailSignIn: (email: string, password: string) => Promise<User>;
    signOut: () => Promise<void>;
    //passwordResetRequest: () => Promise<true>;
};

export type ApiMethods = {
    getTasks: () => Promise<Task[]>;
    createTask: (title: string, description: string) => Promise<TaskWOCategories>;
    editTask: (taskId: number, taskOptions: { title?: string, description?: string }) => Promise<TaskWOCategories>;
    deleteTask: (taskId: number) => Promise<void>;
    addTagToTask: (taskId: number, tagId: number) => Promise<void>;
    removeTagFromTask: (taskId: number, tagId: number) => Promise<void>;

    createTag: (categoryId: number, name: string) => Promise<Tag>;
    editTag: (tagId: number, name: string) => Promise<Tag>;
    deleteTag: (tagId: number) => Promise<void>;

    getCategories: () => Promise<Category[]>;
    createCategory: (name: string) => Promise<CategoryWOTags>;
    editCategory: (categoryId: number, name: string) => Promise<CategoryWOTags>;
    deleteCategory: (categoryId: number) => Promise<void>;
};

export type ApiClient = AuthMethods & ApiMethods;

const getApiClient = (authAxiosInstance: AuthAxiosInstance): ApiClient => {
    const authMethods: AuthMethods = {
        hasAuthTokens: authAxiosInstance.hasAuthTokens,
        validateToken: async () => {
            const { data: rawUser } = await authAxiosInstance.get('/auth/validate_token');
            return transformRawUser(rawUser as RawUser);
        },
        emailSignIn: async (email, password) => {
            try {
                const { data: rawUser } = await authAxiosInstance.post('/auth/sign_in', { email, password });
                return transformRawUser(rawUser as RawUser);
            } catch (err) {
                throw signInErrorTransformer(err as Error);
            }
        },
        emailSignUp: async (email, password, passwordConfirmation, userInfoOptions?) => {
            try {
                const { data: rawUser } = await authAxiosInstance.post('/auth', {
                    ...userInfoOptions,
                    email,
                    password,
                    'password_confirmation': passwordConfirmation
                });
                return transformRawUser(rawUser as RawUser);
            } catch (err) {
                throw signupErrorTransformer(err as Error);
            }
        },
        signOut: async () => {
            await authAxiosInstance.delete('/auth/sign_out');
            authAxiosInstance.clearAuthHeadersAndCookies();
        }
    };

    const apiMethods: ApiMethods = {
        
        // Task methods
        getTasks: async () => {
            const { data: rawTasks } = await authAxiosInstance.get('/tasks');
            return transformRawTasks(rawTasks as RawTasks);
        },
        createTask: async (title, description) => {
            const { data: { task: newTask } } = await authAxiosInstance.post('/tasks', {
                task: { title, description }
            });
            return transformRawTaskWOCategories(newTask as RawTaskWOCategories);
        },
        editTask: async (taskId, taskOptions) => {
            const { data: { task: updatedTask } } = await authAxiosInstance.patch(`/tasks/${taskId}`, { tasks: taskOptions })
            return transformRawTaskWOCategories(updatedTask as RawTaskWOCategories);
        },
        deleteTask: async (taskId) => {
            await authAxiosInstance.delete(`/tasks/${taskId}`);
        },
        addTagToTask: async (taskId, tagId) => {
            await authAxiosInstance.post(`/tasks/${taskId}/tags/${tagId}`);
        },
        removeTagFromTask: async (taskId, tagId) => {
            await authAxiosInstance.delete(`/tasks/${taskId}/tags/${tagId}`);
        },


        // Tag methods
        createTag: async (categoryId, name) => {
            const { data: newTag } = await authAxiosInstance.post('/tags', {
                tag: {
                    name,
                    category_id: categoryId
                }
            });
            return transformRawNewTag(newTag as RawTag);
        },
        editTag: async (tagId, name) => {
            const { data: updatedTag } = await authAxiosInstance.post(`/tags/${tagId}`, { tag: { name } });
            return transformRawNewTag(updatedTag as RawTag);
        },
        deleteTag: async (tagId) => {
            await authAxiosInstance.delete(`/tags/${tagId}`);
        },


        // Category methods
        getCategories: async () => {
            const { data: rawCategories } = await authAxiosInstance.get('/categories');
            return transformRawCategories(rawCategories as RawCategories);
        },
        createCategory: async (name) => {
            const { data: newCategory } = await authAxiosInstance.post('/categories', {
                category: {
                    name,
                    allow_multiple_tags: true
                }
            });
            return transformRawCategoryWOTags(newCategory as RawCategoryWOTags);
        },
        editCategory: async (categoryId, name) => {
            const { data: updatedCategory } = await authAxiosInstance.patch(`/categories/${categoryId}`, { category: { name } });
            return transformRawCategoryWOTags(updatedCategory as RawCategoryWOTags);
        },
        deleteCategory: async (categoryId) => {
            await authAxiosInstance.delete(`/categories/${categoryId}`);
        }
    };
    return Lodash.assign({}, authMethods, apiMethods);
};

export default getApiClient;