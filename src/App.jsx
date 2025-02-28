import "./App.css";
import Header from "./todoProject/components/Header";
import Editor from "./todoProject/components/Editor";
import List from "./todoProject/components/List";
import { useState, useEffect, useRef, useReducer, useCallback, createContext } from "react";
import Exam from "./components/Exam";
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
//복잡한 코드는 reducer를 사용하여 가독성을 높일 수 있다.(일반적으로 이렇게 사용한다.)
function reducer(state, action) {
	//return문에는 변화된 state 값을 return해줄거임.
	switch (action.type) {
		case "INSERT":
			return [action.data, ...state];
		case "UPDATE":
			//기존에 todoItem값만 나열하고 해당ID만 업데이트
			return state.map((todo) =>
				todo.id === action.data ? { ...todo, isDone: !todo.isDone } : todo
			);
		case "DELETE":
			return state.filter((todo) => todo.id !== action.data);
		default:
			return state;
	}
}

export const TodoContext = createContext();

function App() {
	// const [todos, setTodos] = useState(mockData);
	const [todos, dispatch] = useReducer(reducer, mockData);

	const contentId = useRef(3);

    //🔽컴포넌트 마운트 이후로는 리렌더링 안되게
	//useCallback ( 최적화할 함수(익명함수), [deps] )
	const onCreate =  useCallback((content) =>{
		let newTodo = {
			id: contentId.current++,
			isDone: false,
			content: content,
			date: new Date().getTime(),
		};

		//todos.push(newTodo) <-- 이렇게하면 리렌더링 시 사라짐
		//🚨변경된 값을 react가 감지하려면 제공된 '상태변화함수'를 이용하자.
		//setTodos([newTodo, ...todos]); //새로운 배열 생성
		dispatch({
			type: "INSERT",
			data: newTodo,
		});
	}, []);

	//체크박스 클릭/해제(삼항연산자)
	const onUpdate =useCallback((targetId) => {
		// setTodos(
		// 	todos.map((todo) => (todo.id === targetId ? { ...todo, isDone: !todo.isDone } : todo))
		// );

		dispatch({
			type: "UPDATE",
			data: targetId, //어떤 id가 변화되는지 보내기
		});
	},[]);

	//삭제버튼
	const onDelete = useCallback((targetId) => {
		//인수 : todos 배열에서 targetId와 일치하는 id를 갖는 요소만 삭제한 새로운 배열
		// setTodos(todos.filter((todo) => todo.id !== targetId));
		dispatch({
			type: "DELETE",
			data: targetId, //어떤 id가 변화되는지 보내기
		});
	},[]);

	return (
		<div className="App">
			{/* Header 컴포넌트는 App컴포넌트가 리렌더링되더라도, 리렌더링할 필요가 전혀 없다. */}
			<Header />
			<TodoContext.Provider
				value={{
					todos,
					onCreate,
					onUpdate,
					onDelete,
				}}
			>
			{/*<Editor onCreate={onCreate} />*/}
			{/*	<List todos={todos} onUpdate={onUpdate} onDelete={onDelete} />*/}
			<Editor />
			<List/>
			</TodoContext.Provider>
		</div>
	);
}

export default App;
