import "./List.css";
import TodoItem from "./TodoItem";
import { useMemo, useState , useContext} from "react";
import {TodoContext} from "../../App.jsx"


// const List = ({ todos, onUpdate, onDelete}) => {
const List = () => {

	const {todos} = useContext(TodoContext);
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

	//최적화 - List 컴포넌트가 리렌더링 될때마다 실행
	//구조분해할당으로 받아오기
	const { totalCount, doneCount, notDoneCount } = useMemo(() => {
		//첫번째 인수는 콜백함수(변수에 값 넣어줌), 두번째 인수는 바뀔때 인식할 값
		console.log("getAnalyzedData 호출"); //리렌더링 확인
		const totalCount = todos.length;
		//배열 전체요소 순회(많아지면 리렌더링될때마다 오래걸릴 수 있음 -> useMemo를 사용하기 때문에 최적화됨됨)
		const doneCount = todos.filter((todo) => todo.isDone).length;
		const notDoneCount = totalCount - doneCount;

		return {
			totalCount,
			doneCount,
			notDoneCount,
		};
	}, [todos]); // 의존성배열 : deps

	return (
		<div className="List">
			<h4>Todo List ❤️</h4>
			<div>
				<div>total: {totalCount}</div>
				<div>done(체크): {doneCount}</div>
				<div>notDone(체크X): {notDoneCount}</div>
			</div>
			<input placeholder="검색어를 입력하세요." value={search} onChange={onChangeSearch} />
			<div className="todos_wrapper">
				{filterTodos.map((todo) => {
					//어떠한 리스트를 컴포넌트로 렌더링하게되면 고유한 key값을 가져야한다.(props의 key를 사용한다.)
					//key={todo.id}
					return (
						// <TodoItem key={todo.id} {...todo} onUpdate={onUpdate} onDelete={onDelete} />
						<TodoItem key={todo.id} {...todo}/>
					);
				})}
			</div>
		</div>
	);
};
export default List;
