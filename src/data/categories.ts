


// fake data
export const categories = [
  { id: 0, name: "Du lịch" },
  { id: 1, name: "Đi làm" },
  { id: 2, name: "Mua sắm" },
  { id: 3, name: "Xem phim" },
  { id: 4, name: "Shopping" },
  { id: 5, name: "Đi chơi" },
];


// lấy tên category từ id
export var nameCate = (idTodo: number) => {
    const nameCate: any = categories.filter((cate) => cate.id === idTodo);
    return nameCate[0].name;
    // console.log(nameCate[0].name);
}