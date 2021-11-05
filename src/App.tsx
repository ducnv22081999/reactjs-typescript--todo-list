import { useState } from "react";
import Header from "./components/Header/Header";
import TodoList from "./components/TodoList/TodoList";
import AddNewTodoModal from "./components/Modal/AddNewTodoModal";
import ButtonShowAddNewTodoModal from "./components/Button/ButtonShowAddNewTodoModal";
import { categories } from './data/categories';
import "./App.css";


function App() {
  const [isShowModal, setIsShowModal] = useState(false);
  const [isShowButton, setIsShowButton] = useState(true);
  const [todoList, setTodoList] = useState<object[]>([]);
  
  const handleChangeShow = () => {
    setIsShowModal(!isShowModal);
    setIsShowButton(!isShowButton);
  };

  const handleCheckBox = (id: string) => {
    todoList.filter((todo: any) => {
      // console.log(typeof todo)
      if (todo.id === id) {
        todo.isComplete = true;
        setTodoList((prev: object[]) => [...prev]);
      }
      return () => {};
    });
  };
  const dataTodoItem = (itemTodo: object) => {
    setTodoList((prev: object[]) => [...prev, itemTodo]);
    // console.log(itemTodo)
  };

  return (
    <div className="app">

      {isShowButton && (
        <ButtonShowAddNewTodoModal onChangeShow={handleChangeShow} />
      )}

      <div className="main">
        <div className="grid">
          <Header todos={todoList} />
          <TodoList
            todos={todoList}
            categories={categories}
            onCheckBox={(id) => handleCheckBox(id)}
          />
        </div>
      </div>

      {isShowModal && (
        <AddNewTodoModal
          onChangeShow={handleChangeShow}
          categories={categories}
          receiveDataItem={(itemTodo: object) => dataTodoItem(itemTodo)}
        />
      )}


    </div>
  );
}

export default App;
