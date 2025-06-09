import "./App.css";
import { useMemo, useEffect, useState, useRef } from "react";

import Editor from "./todoProject/components/Editor";
import Header from "./todoProject/components/Header";
import List from "./todoProject/components/List";

//컴포넌트가 리렌더링 될때마다 다시 생성할 필요 없으므로 컴포넌트 바깥에다가 생성한다.
//삭제하면 원소가 삭제된다(새로고침 전까지 유지됨)
const mockData = [
	{
		id: 0,
		isDone: false, //체크박스
		content: "숙제하기",
		date: new Date().getTime(),
	},
	{
		id: 1,
		isDone: false,
		content: "빨래하기",
		date: new Date().getTime(),
	},
	{
		id: 2,
		isDone: false,
		content: "React 공부하기",
		date: new Date().getTime(),
	},
];

function ToDoListApp() {
	const [todos, setTodos] = useState(mockData);
	const contentId = useRef(3);

	const onCreate = (content) => {
		const newTodo = {
			id: contentId.current++,
			isDone: false,
			content: content,
			date: new Date().getTime(),
		};

		//todos.push(newTodo) <-- 이렇게하면 리렌더링 시 사라짐
		//🚨변경된 값을 react가 감지하려면 제공된 '상태변화함수'를 이용하자.
		setTodos([newTodo, ...todos]); //새로운 배열 생성
	};


	//체크박스 클릭/해제(삼항연산자)
	const onUpdate = (targetId) => {
		setTodos(
			todos.map((todo) => (todo.id === targetId ? { ...todo, isDone: !todo.isDone } : todo))
		);
	};

	//삭제버튼
	const onDelete = (targetId) => {
		//인수 : todos 배열에서 targetId와 일치하는 id를 갖는 요소만 삭제한 새로운 배열
		setTodos(todos.filter((todo) => todo.id !== targetId));
	};
	return (
		<div className="App">
			<Header />
			<Editor onCreate={onCreate} />
			<List todos={todos} onUpdate={onUpdate} onDelete={onDelete} />
		</div>
	);
}

export default ToDoListApp;
