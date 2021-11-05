import './ButtonShowAddNewTodoModal.css';

interface ButtonShowAddNewTodoModalProps {
  onChangeShow: () => void;
};

const ButtonShowAddNewTodoModal: React.FC<ButtonShowAddNewTodoModalProps> = ({ onChangeShow }) => {
  return (
    <div className="btn--show-modal" onClick={() => onChangeShow()}>
      <i className="fas fa-plus"></i>
    </div>
  );
}

export default ButtonShowAddNewTodoModal;
