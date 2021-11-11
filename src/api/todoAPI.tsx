import { axiosClient } from "./axiosClient";
import { ITodoItem } from "./../components/interface";

const TodoAPI = {
    getAll() {
        const url = `/todolist`;
        return axiosClient.get(url);
    },
    // getTodo(id: string) {
    //     const url = `/todolist/${id}`;
    //     console.log((url))
    //     return axiosClient.get(url);
    // },
    addTodo(todo: ITodoItem) {
        const url = `/todolist`;
        axiosClient.post(url, todo)
    },
    deleteTodo(id: string) {
        const url = `/todolist/${id}`;
        axiosClient.delete(url)
    },
    editTodo(id: string) {
        const url = `/todolist/${id}`;
        axiosClient.get(url)
    },
}
export default TodoAPI;