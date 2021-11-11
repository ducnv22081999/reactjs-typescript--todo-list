export interface ITodoItem {
    id: string;
    title: string;
    category_id: string;
    isComplete: boolean;
}

export interface ICategoryItem {
    id: string;
    name: string;
}
