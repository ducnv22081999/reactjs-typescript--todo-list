import TodoItem from "./TodoItem/TodoItem";
import { ITodoItem, ICategoryItem } from "./../interface";

// import "./TodoList.css";

interface TodoListProps {
  list: ITodoItem[];
  categories: ICategoryItem[];
  onCheckBox: (id: string) => void;
  deleteTodo: (id: string) => void;
  editTodo: (item: ITodoItem) => void;
}
const TodoList: React.FC<TodoListProps> = ({
  list,
  categories,
  onCheckBox,
  deleteTodo,
  editTodo
}) => {
  const incomplete = list.filter((todo) => todo.isComplete === false);
  const completed = list.filter((todo) => todo.isComplete === true);
  // renderTodoItem (item, index) {
  //   return <TodoItem
  //   key={index}
  //   id={item.id}
  //   title={item.title}
  //   complete={item.isComplete}
  //   category={nameCate(item.category_id)}
  //   onCheckBox={(id: string) => onCheckBox(id)}
  // />
  // }
  return (
    <div>
      {/* row */}
      <div className="grid__row">
        <div className="card__todo">
          <h3 className="title">Incomplete</h3>
          <div className="list">
            {/* 1item */}
            {incomplete.map((item, index) => (
              <TodoItem
                key={index}
                item={item}                
                onCheckBox={(id: string) => onCheckBox(id)}
                deleteTodo={(id: string) => deleteTodo(id)}
                editTodo={(item: ITodoItem) => editTodo(item)}
              />
            ))}
            {/* end 1item */}
          </div>
        </div>
      </div>
      {/* end row */}
      {/* row */}
      <div className="grid__row">
        <div className="card__todo">
          <h3 className="title">Completed</h3>
          <div className="list">
            {/* 1item */}
            {completed.map((item, index) => (
              <TodoItem
                key={index}
                item={item}                
                onCheckBox={(id: string) => onCheckBox(id)}
                deleteTodo={(id: string) => deleteTodo(id)}
                editTodo={(item: ITodoItem) => editTodo(item)}
              />
            ))}
            {/* end 1item */}
          </div>
        </div>
      </div>
      {/* end row */}
    </div>
  );
};

export default TodoList;
