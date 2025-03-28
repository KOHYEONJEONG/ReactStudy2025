import "./App.css";
import Header from "./todoProject/components/Header";
import Editor from "./todoProject/components/Editor";
import List from "./todoProject/components/List";
import { useState, useEffect, useRef, useReducer, useCallback, createContext, useMemo } from "react";
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
			console.log("default")
			//throw new Error(`Unhandled action type: ${action.type}`);
			return state;
	}
}

// export const TodoContext = createContext();

// Context 분리(컴포넌트 바깥에 작성이유 : 리렌더링 필요치 않음.)
// export가 붙어야 Context가 필요한 컴포넌트가 값을 사용할 수 있다.
export const TodoStateContext = createContext();//프롭스 드릴링 해결하기 위한 방안, 변하할 값
export const TodoDispatchContext = createContext();//프롭스 드릴링 해결하기 위한 방안, 변화지 않은 값

function TodoListContextApp() {
	// const [todos, setTodos] = useState(mockData);
	const [todos, dispatch] = useReducer(reducer, mockData);//인자 : 리듀서 함수, 초기상태

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


	//App 컴포넌트 마운트 이후로 재생성되지 않게, deps []
	const memoizedDispatch = useMemo(() => {
		return { onCreate, onUpdate, onDelete };
	}, []);

	const prevDispatchRef = useRef(memoizedDispatch)

	useEffect(() => {

		if (prevDispatchRef.current === memoizedDispatch) {
			console.log("✅ memoizedDispatch 유지됨 (같은 객체)");
		} else {
			console.log("❌ memoizedDispatch 새로 생성됨 (다른 객체)");
		}
		prevDispatchRef.current = memoizedDispatch; // 갱신
	}, [memoizedDispatch]);

	return (
		<div className="App">
			{/* Header 컴포넌트는 App컴포넌트가 리렌더링되더라도, 리렌더링할 필요가 전혀 없다. */}
			<Header />

{/* 💥Provider도 컴포넌트이기 때문에 props가 바뀌면 리렌더링을 하게된다. */}
{/* value={{todos, onCreate, onUpdate, onDelete}} <-- todos가 변경하게 되면 props로 제공하는 객체가 다시 생성하게 되고 그래서 리렌더링되는것*/}
{/* 하위 컴포넌트는 부모 컴포넌트가 리렌더링이 됐기 때문에 같이 리렌더링이 되는것. */}

        {/* 이제 개발자도구에서 보면 Context도 계층구조에 포함되는걸 볼 수 있다. */}
			<TodoStateContext.Provider value={todos}>
				<TodoDispatchContext.Provider value={memoizedDispatch}>
					{/*<Editor onCreate={onCreate} />*/}
					{/*	<List todos={todos} onUpdate={onUpdate} onDelete={onDelete} />*/}

                    {/* 컨텍스트 안에 컴포넌트들은 모두 데이터를 공급받을 수 있다. */}
					<Editor />
					<List/>
				</TodoDispatchContext.Provider>
			</TodoStateContext.Provider>
		</div>
	);
}

export default TodoListContextApp;
