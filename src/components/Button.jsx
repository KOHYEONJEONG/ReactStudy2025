/* 비구조화 할당 문법 적용 전
const Button = (props) => {
    //객체로 넘어옴
    console.log(props)//{text: '메일'}

	//🚨props.color가 무조건 들어온다는 생각은 버려! 오류 발생해
    return <button style={{color:props.color}}>{props.text}</button>
};
*/

//리액트 버전 19번전 이후
//props를 객체의 구조분해할당 방식으로 받아오기
// default를 설정하기 전에 객체구조분해할당으로 받아온 후 가능하며 (ex)color="bl"로 설정하면된다.
const Button = ({ text, color = "bl", children }) => {
	//클릭과 같은 이벤트가 발생했을 때 실행될 수 있도록 설정된 이러한 함수를
	//이벤트 핸들러 : 이벤트를 클릭과 같은 이벤트들을 실질적으로 처리하는 함수
	//익명함수 OR 화살표 함수로 만들어 주면 된다.
	const onClick = (e) => {
		console.log(e); //SyntheticBaseEvent 합성이벤트 객체체
		console.log(text);
	};

	// e : 이벤트 객체
	//'크로스 브라우징 이슈'에서도 자유롭다 - 리액트에서 'SyntheticBaseEvent 합성이벤트 객체' 지원
	// ㄴ (통일된 규칙, 여러 브라우저 통합 규제)
	// ㄴ console.log(e)
	// ㄴ console.log(e.target)

	//children : 부모 컴포넌트에서 자식 컴포넌트에게 값을 전달
	return (
		// 클릭이벤트 핸들러로 onClick으로 설정
		//콜백함수를 전달하듯, 함수이름만 적어야 함.
		<button style={{ color: color }} onClick={onClick}>
			{text}
			{children}
		</button>
	);
};

//리액트 18버전인 경우
// //기본값을 주면 오류 안남
// Button.defaultProps ={
//     color:"green"
// }

export default Button;
