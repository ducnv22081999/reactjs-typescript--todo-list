import { ITodoItem } from "../../interface";
import { nameCate } from "./../../../data/categories";
import "./TodoItem.css";

interface TodoItemProps {
  item: ITodoItem;
  onCheckBox: (id: string) => void;
  deleteTodo: (id: string) => void;
  editTodo: (item: ITodoItem) => void;
}

const TodoItem: React.FC<TodoItemProps> = ({
  item,
  onCheckBox,
  deleteTodo,
  editTodo,
}) => {
  const isCheckCompleteInput = (isComplete: boolean) => {
    if (!isComplete) {
      return (
        <input
          type="checkbox"
          checked={false}
          readOnly
          onClick={() => onCheckBox(item.id)}
        />
      );
    } else if (isComplete) {
      return (
        <input
          type="checkbox"
          defaultChecked
          disabled
          onClick={() => onCheckBox(item.id)}
        />
      );
    }
  };
  const isCheckCategoryCompleted = (isComplete: boolean) => {
    if (!isComplete) {
      return nameCate(item.category_id);
    }
  };
  return (
    <div className="list__item">
      <div className="list__item__title">
        {isCheckCompleteInput(item.isComplete)}
        <h5>{item.title}</h5>
        <div className="btn__group">
          <button className="btn btn--edit" onClick={() => editTodo(item)}>Sửa</button>
          <button className="btn btn--delete" onClick={() => deleteTodo(item.id)}>Xóa</button>
        </div>
      </div>
      <div className="list__item__category">
        {isCheckCategoryCompleted(item.isComplete)}
      </div>
    </div>
  );
};

export default TodoItem;
