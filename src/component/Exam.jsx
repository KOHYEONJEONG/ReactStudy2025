import React, { useReducer } from "react";

//reducer : 변환기
// -> 상태를 실제로 변환시키는 변환기 역할
function reducer(state, action) {
	//action 객체가 매개변수로 전달받음.
	console.log(state, action);
}
function Exam() {
	//dispatch : 발송하다, 급송하다.
	//dispatch함수 : 상태변화를 알려주는 함수
	const [state, dispatch] = useReducer(reducer, 0); //두번째 인수는 초기값 전달

	const onClickPlus = () => {
		//인수 : 상태가 어떻게 변화되길 원하는지
		// -> 액션 객체
		dispatch({
			type: "INCREASE", //증가
			data: 1, //1만큼
		});
	};
	return (
		<div>
			<h1>{state}</h1>
			<button>+</button>
		</div>
	);
}

export default Exam;
