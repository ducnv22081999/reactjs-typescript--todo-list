import { useState, useEffect } from "react";
import Header from "./components/Header/Header";
import TodoList from "./components/TodoList/TodoList";
import AddNewTodoModal from "./components/Modal/AddNewTodoModal";
import ButtonShowAddNewTodoModal from "./components/Button/ButtonShowAddNewTodoModal";
import { categories } from "./data/categories";
import { ITodoItem } from "./components/interface";
import "./App.css";
import TodoAPI from "./api/todoAPI";

function App() {
  const [isShowModal, setIsShowModal] = useState(false);
  const [isShowButton, setIsShowButton] = useState(true);
  const [todoList, setTodoList] = useState<ITodoItem[]>([]);


  useEffect(() => {
    const getAll = async () => {
      try {
        const { data: list } = await TodoAPI.getAll();
        setTodoList(list);
      } catch (error) {
        console.log(error);
      }
    };
    getAll();
  }, []);
  // console.log(todoList)

  // add item
  const handleAddItem = async (itemTodo: ITodoItem) => {
    try {
      await TodoAPI.addTodo(itemTodo);
      // setTodoList([...todoList,itemTodo]);
    } catch (error) {
      console.log(error);
    }

    // console.log(itemTodo)
    setTodoList((prev: ITodoItem[]) => [...prev, itemTodo]);
  };
  // modal/button
  const handleChangeShow = () => {
    setIsShowModal(!isShowModal); // on/off Modal
    setIsShowButton(!isShowButton); // on/off Button
  };
  // handle checkbox
  const handleCheckBox = (id: string) => {
    const list = todoList.map((todo: ITodoItem) => {
      if (todo.id === id) {
        return {
          ...todo,
          isComplete: !todo.isComplete,
        };
      }
      return todo;
    });
    setTodoList(list);
  };
  // handleDeleteTodo
  const handleDeleteTodo = async (id: string) => {
    try {
      await TodoAPI.deleteTodo(id);
      const list = todoList.filter((todo: ITodoItem) => todo.id !== id);
      setTodoList(list);
    } catch (error) {
      console.log(error);
    }
  }
  // handleEditTodo
  const handleEditTodo = async (id: string) => {
    const todo = todoList.filter((todo: ITodoItem) => todo.id === id);
    console.log(todo[0])
  }

  return (
    <div className="app">
      {console.log("app đã chạy")}
      {isShowButton && (
        <ButtonShowAddNewTodoModal onChangeShow={handleChangeShow} />
      )}
      <div className="main">
        <div className="grid">
          <Header todos={todoList} />
          <TodoList
            list={todoList}
            categories={categories}
            onCheckBox={handleCheckBox}
            deleteTodo={handleDeleteTodo}
            editTodo={handleEditTodo}
          />
        </div>
      </div>

      {isShowModal && (
        <AddNewTodoModal
        // editTodo={}
          onChangeShow={handleChangeShow}
          categories={categories}
          onAddTodo={handleAddItem}  
        />
      )}
    </div>
  );
}

export default App;
