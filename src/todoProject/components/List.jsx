import "./List.css";
import TodoItem from "./TodoItem";
import { useState } from "react";
const List = ({ todos, onUpdate, onDelete }) => {
	const [search, setSearch] = useState("");

	//이벤트 핸들러
	const onChangeSearch = (e) => {
		//e : 이벤트 객체
		setSearch(e.target.value);
	};

	//필터링된 Todos를 반환한다.
	const getFilteredData = () => {
		if (search === "") {
			return todos;
		}

		return todos.filter(
			(todo) =>
				//todo의 원소중에
				// ex) React Study에서 검색어 React만 있어도 조회되게 하기위해서
				todo.content.toLowerCase().includes(search.toLowerCase()) //toLowerCase : 소문자로 변환
			//참이되는 것만 필터링
		);
	};

	//리렌더링 될때마다 검색어의 필터링된 todos값을 받는다.
	const filterTodos = getFilteredData();

	return (
		<div className="List">
			<h4>Todo List ❤️</h4>
			<input placeholder="검색어를 입력하세요." value={search} onChange={onChangeSearch} />
			<div className="todos_wrapper">
				{filterTodos.map((todo) => {
					//어떠한 리스트를 컴포넌트로 렌더링하게되면 고유한 key값을 가져야한다.(props의 key를 사용한다.)
					return (
						<TodoItem key={todo.id} {...todo} onUpdate={onUpdate} onDelete={onDelete} />
					);
				})}
			</div>
		</div>
	);
};
export default List;
