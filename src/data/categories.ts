import { ICategoryItem } from "../components/interface";

// fake data
export const categories = [
  { id: "0", name: "Du lịch" },
  { id: "1", name: "Đi làm" },
  { id: "2", name: "Mua sắm" },
  { id: "3", name: "Xem phim" },
  { id: "4", name: "Shopping" },
  { id: "5", name: "Đi chơi" },
];

// lấy tên category từ id
export const nameCate = (idTodo: string) => {
  const nameCate: ICategoryItem[] = categories.filter(
    (cate) => cate.id === idTodo
  );
  // console.log(nameCate[0].name);
  // return nameCate[0].name;
  if (nameCate[0]) {
    return nameCate[0].name;
  } else {
    return "Invalid categories ...";
  }
};
