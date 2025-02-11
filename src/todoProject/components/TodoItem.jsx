import "./TodoItem.css";
const TodoItem = ({ id, isDone, content, date, onUpdate, onDelete }) => {
	const onChangeCheckbox = () => {
		onUpdate(id);
	};

	const onChangeDeleteButton = () => {
		onDelete(id);
	};
	return (
		<div className="TodoItem">
			<input
				type="checkbox"
				checked={isDone}
				onChange={onChangeCheckbox} //체크박스를 클릭했다고 onClick이 아닌, 체크가 변경되는 이벤트에 가까우므로 onChange이다.
			/>
			<div className="content">{content}</div>
			<div className="date">{new Date(date).toLocaleDateString()}</div>
			<button onClick={onChangeDeleteButton}>삭제</button>
		</div>
	);
};
export default TodoItem;
