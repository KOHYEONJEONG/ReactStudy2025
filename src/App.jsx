import "./App.css";
import Viewer from "./counterProject/components/Viewer";
import Controller from "./counterProject/components/Controller";
import Even from "./counterProject/components/Even";
import { useState, useEffect, useRef } from "react";
import Exam from "./components/Exam";
function App() {
	const [count, setCount] = useState(0);
	const [input, setInput] = useState("");
	const isMount = useRef(false); //라이프 사이클 중 update일때만 사이드이펙트 사용하기 위해 생성

	//1. Mount(탄생) :[], 최초1회 실행
	useEffect(() => {
		console.log("Mount");
	}, []);

	//2. Update(변화 , 리렌더링)
	useEffect(() => {
		if (!isMount.current) {
			// 컴포넌트가 Mount되지 않으면 실행x, 이후 리렌더링에서만 실행된다.
			isMount.current = true;
			return;
		}
		console.log("update");
	}); //deps가 없으면 : 컴포넌트가 리렌더링될 때 호출된다.

	//3. UnMount(죽음)

	//이벤트 핸들러
	const onClickButton = (value) => {
		setCount(count + value);
	};

	return (
		<div className="App">
			<Exam />
		</div>
	);
}

export default App;
