import moment from "moment";
import "./Header.css";

interface HeaderProps {
  todos: any[];
}

const Header: React.FC<HeaderProps> = ({ todos }) => {
  // November 2, 2021
  const incomplete = todos.filter((todo) => todo.isComplete === false);
  const completed = todos.filter((todo) => todo.isComplete === true);
  return (
    <div className="grid__row">
      <div className="info">
        <h2 className="date-time">{moment().format("MMMM DD, YYYY")}</h2>
        <div className="status">
          {incomplete.length} incomplete, {completed.length} completed
        </div>
      </div>
    </div>
  );
};

export default Header;
