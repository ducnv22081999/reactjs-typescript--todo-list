import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { ITodoItem, ICategoryItem } from "./../interface";
import "./AddNewTodoModal.css";

interface AddNewTodoModalProps {
  categories: ICategoryItem[];
  currentTodo: ITodoItem | null;
  onAddTodo?: (itemTodo: ITodoItem) => void;
  onEditTodo?: (itemTodo: ITodoItem) => void;
  onClose: () => void;
}

const AddNewTodoModal: React.FC<AddNewTodoModalProps> = ({
  categories,
  currentTodo,
  onAddTodo,
  onEditTodo,
  onClose,
}) => {
  const [inputTitle, setInputTitle] = useState(currentTodo?.title || "");
  const [inputCategory, setInputCategory] = useState("");

  const handleSubmit = () => {
    if (currentTodo && onEditTodo) {
      const itemTodo = {
        id: currentTodo.id,
        title: inputTitle,
        category_id: +inputCategory + "", // convert to string
        isComplete: currentTodo.isComplete, // default complete false
      };
      onEditTodo(itemTodo); // send data to App
      console.log("update")
    }
    else if (onAddTodo) {
      const itemTodo = {
        id: uuidv4(),
        title: inputTitle,
        category_id: +inputCategory + "", // convert to string
        isComplete: false, // default complete false
      };
      onAddTodo(itemTodo); // send data to App
      handleClose();
      console.log("adđ")
    }
  };
  const handleClose = () => {
    onClose();
  };
  return (
    <div className="grid modal">
      <div className="modal__overlay" />
      <div className="modal__body">
        <div className="modal__inner">
          <div className="modal-form">
            <div className="modal-form__header">
              <h3 className="modal-form__title">Thêm ToDo</h3>
            </div>
            <div className="modal-form__form">
              <div className="modal-form__group">
                <label>Tên công việc:</label>
                <input
                  type="text"
                  value={inputTitle}
                  className="modal-form__input"
                  placeholder="Todoooo..."
                  onChange={(e) => setInputTitle(e.target.value)}
                />
              </div>
              <div className="modal-form__group">
                <label htmlFor="modal-form__input--category">Danh mục:</label>
                <select
                  className="modal-form__select"
                  id="modal-form__input--category"
                  onChange={(e) => setInputCategory(e.target.value)}
                >
                  {categories.map((item: ICategoryItem, index: number) => (
                    <option key={index} value={item.id}>
                      {item.name}
                    </option>
                  ))}
                </select>
              </div>
              <div className="modal-form__controls">
                <button className="btn btn--close" onClick={handleClose}>
                  Đóng
                </button>
                <button className="btn btn--add" onClick={handleSubmit}>
                  Thêm
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddNewTodoModal;
