export type UserInfo = {
    nickname?: string;
};

export type Task = {
    id: number;
    title: string;
    description: string;
    created_at: Date;
    updated_at: Date;
    categories: CategorySimplified[];
};

export type Category = CategorySimplified & {
    allow_multiple_tags: boolean;
    created_at: Date;
    updated_at: Date;
};

export type CategorySimplified = {
    id: number;
    name: string;
    tags: Tag[];
};

export type Tag = {
    id: number;
    name: string;
    category_id: number;
};

export type User = {
    email: string;
    uid: string;
    id: number;
    provider: string;
    allow_password_change: boolean;
    name: string;
    nickname: string | null;
    image: null;
};


// Raw return JSON format from API
type RawTaskBase = {
    id: number;
    title: string;
    description: string;
    created_at: string;
    updated_at: string;
};

// Format of successful POST "/auth/sign_in", "/auth/sign_up", "/auth/validate_token"
export type RawUser = {
    data: User;
};


// Format of successful GET "/tasks"
export type RawTasks = RawTask[];
type RawTask = RawTaskBase & {
    categories: {
        [category_name: string]: Tag[];
    };
};


// Format of successful GET "/categories"
export type RawCategories = RawCategory[];
type RawCategory = {
    id: number;
    name: string;
    allow_multiple_tags: boolean;
    created_at: string;
    updated_at: string;
    tags: RawTagInCategory[];
};
type RawTagInCategory = {
    id: number;
    name: string;
    category_id: number;
    tasks: RawTaskBase[]
};