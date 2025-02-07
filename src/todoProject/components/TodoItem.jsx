import './TodoItem.css';
const TodoItem = () => {
    return (
        <div className="TodoItem">
            <input type="checkbox" />
            <div>Todo...</div>
            <div>Date</div>
            <button>삭제</button>
        </div>
    );
};
export default TodoItem;
