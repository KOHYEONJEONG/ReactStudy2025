import "./Editor.css";
import { useState, useRef, useContext } from "react";
import {TodoContext} from "../../App.jsx";
// const Editor = ({ onCreate }) => {
const Editor = () => {

	const {onCreate} = useContext(TodoContext);

	//객체 구조분해로 prop 받음.
	const [content, setContent] = useState("");
	const inputRef = useRef(); //포커스하려고 생성

	const onChangeContent = (e) => {
		setContent(e.target.value);
	};

	//추가 버튼
	const onSubmit = () => {
		if (content === "") {
			inputRef.current.focus();
			return;
		}

		//부모컴포넌트에서 보낸 함수
		onCreate(content); //전송
		setContent(""); //빈값으로 변경
	};

	//Enter 감지
	const onKeydown = (e) => {
		if (e.keyCode === 13) {
			onSubmit();
		}
	};

	return (
		<div className="Editor">
			<input
				ref={inputRef}
				value={content}
				onKeyDown={onKeydown}
				placeholder="새로운 Todo..."
				onChange={onChangeContent}
			/>
			<button onClick={onSubmit}>추가</button>
		</div>
	);
};
export default Editor;
