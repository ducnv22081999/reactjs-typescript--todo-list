import { useState, useEffect } from "react";
import Header from "./components/Header/Header";
import TodoList from "./components/TodoList/TodoList";
import AddNewTodoModal from "./components/Modal/AddNewTodoModal";
import ButtonShowAddNewTodoModal from "./components/Button/ButtonShowAddNewTodoModal";
import { categories } from "./data/categories";
import { ITodoItem } from "./components/interface";
import TodoAPI from "./api/todoAPI";
import "./App.css";

function App() {
  const [isShowModal, setIsShowModal] = useState(false);
  const [isShowButton, setIsShowButton] = useState(true);
  const [todoList, setTodoList] = useState<ITodoItem[]>([]);
  const [currentTodo, setCurrentTodo] = useState<ITodoItem | null>(null)

  useEffect(() => {
    // const getAll = async () => {
    //   try {
    //     const { data: list } = await TodoAPI.getAll();
    //     setTodoList(list);
    //   } catch (error) {
    //     console.log(error);
    //   }
    // };
    // getAll();
    TodoAPI.getAll()
        .then((res) => setTodoList(res.data))
        .catch((err) => console.log("Lỗi: ", err))
        .then(() => {})
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
  };
  // handleEditTodo
  const handleEditTodo = async (item: ITodoItem) => {
    // console.log(item);
    setCurrentTodo(item)
    setIsShowModal(!isShowModal)
  };

  const handleUpdateTodo = async (item: ITodoItem) => {
    //todo call api
    console.log(item)
    setCurrentTodo(null)
    setIsShowModal(false); // on/off Modal
    setIsShowButton(true); // on/off Button
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
          currentTodo={currentTodo}
          categories={categories}
          onAddTodo={handleAddItem}
          onEditTodo={handleUpdateTodo}
          onClose={handleChangeShow}
        />
      )}
    </div>
  );
}

export default App;
