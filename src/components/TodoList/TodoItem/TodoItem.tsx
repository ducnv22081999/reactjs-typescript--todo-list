import "./TodoItem.css";

interface TodoItemProps {
  id: string;
  title: string;
  complete: boolean;
  category: string;
  onCheckBox: (id: string) => void;
  deleteTodo: (id: string) => void;
  editTodo: (id: string) => void;
}

const TodoItem: React.FC<TodoItemProps> = ({
  id,
  title,
  complete,
  category,
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
          onClick={() => onCheckBox(id)}
        />
      );
    } else if (isComplete) {
      return (
        <input
          type="checkbox"
          defaultChecked
          disabled
          onClick={() => onCheckBox(id)}
        />
      );
    }
  };
  const isCheckCategoryCompleted = (isComplete: boolean) => {
    if (!isComplete) {
      return category;
    }
  };
  return (
    <div className="list__item">
      <div className="list__item__title">
        {isCheckCompleteInput(complete)}
        <h5>{title}</h5>
        <div className="btn__group">
          <button onClick={() => editTodo(id)}>Sửa</button>
          <button className="btn btn--delete" onClick={() => deleteTodo(id)}>
            Delete
          </button>
        </div>
      </div>
      <div className="list__item__category">
        {isCheckCategoryCompleted(complete)}
      </div>
    </div>
  );
};

export default TodoItem;
