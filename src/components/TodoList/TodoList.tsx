import "./TodoList.css";
import { nameCate } from "./../../data/categories";

interface TodoListProps {
  todos: any[];
  categories: any[];
  onCheckBox: (id: string) => void;
}

const TodoList: React.FC<TodoListProps> = ({
  todos,
  categories,
  onCheckBox,
}) => {
  const incomplete = todos.filter((todo) => todo.isComplete === false);
  const completed = todos.filter((todo) => todo.isComplete === true);

  return (
    <div>
      {/* row */}
      <div className="grid__row">
        <div className="incomplete">
          <h3 className="title">Incomplete</h3>
          <div className="list">
            {/* 1item */}
            {incomplete.map((item, index) => (
              <div className="list__item" key={index}>
                <div className="list__item__title">
                  <input
                    type="checkbox"
                    defaultChecked={false}
                    onClick={() => onCheckBox(item.id)}
                  />
                  <h5>{item.title}</h5>
                </div>
                <div className="list__item__category">{nameCate(item.category_id)}</div>
              </div>
            ))}
            {/* end 1item */}
          </div>
        </div>
      </div>
      {/* end row */}
      {/* row */}
      <div className="grid__row">
        <div className="completed">
          <h3 className="title">Completed</h3>
          <div className="list">
            {/* 1item */}
            {completed.map((item, index) => (
              <div className="list__item" key={index}>
                <div className="list__item__title">
                  <input type="checkbox" defaultChecked disabled />
                  <h5 className="disable">{item.title}</h5>
                </div>
              </div>
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
