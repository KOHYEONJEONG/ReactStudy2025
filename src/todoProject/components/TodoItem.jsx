import "./TodoItem.css";
import { memo, useContext } from "react";
// import {TodoContext} from "../../App.jsx"
import {TodoDispatchContext} from "../../TodoListContextApp.jsx"

// const TodoItem = ({ id, isDone, content, date, onUpdate, onDelete }) => {
const TodoItem = ({ id, isDone, content, date}) => {
	console.log("TodoItem")
	//함수는 객체타입으로 생성하지? 즉 새로운 주소값으로 저장된다(객체는 주소값으로 수행)
	//현재 부모 App컴포넌트가 리렌더링되면 props인 onUpdate와 onDelete는 새로운 주소값(새로운 함수)으로 들어오기때문에
	//memo(TodoItem)만 하면 안된다.
	//객체타입 변수는 프롭스로 받는 자식 컴포넌트는 이렇게만 사용하면 안된다는 말이다.

    //객체 구조분해 할당으로 변수 생성하기
	// const {onUpdate, onDelete} = useContext(TodoContext);

	//🚨memo를 적용한 해당 컴포넌트도 최적화가 풀릴 수 있다. 왜? 객체이기 때문에 새로 생성 시 새로운 공간에 불러오기 때문이다.

	const {onUpdate, onDelete} = useContext(TodoDispatchContext);//useContext : 인자로 넣은 Context로부터 공급된 데이터를 반환해주는 함수.

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
// props로 전달되는 함수가 useCallback으로 memoized되어 있어
// TodoItem을 React.memo로 감싸면 리렌더링을 방지할 수 있음
export default  memo(TodoItem);

//고차 컴포넌트(HOC)
//콜백함수의 매개변수로 과거와 현재 PROPS를 비교한다.(바꼈는가? 안바꼈는가?)
/*
export default memo(TodoItem, (prevProps, nextProps) => {
	//memo메서드는 얕은 비교를 하기에 매번 다른 주소값으로 인식한다(리렌더링이 된다는 뜻)
	//객체타입을 props로 받고 있는 컴포넌트는 과거와 현재 값을 비교해야한다.
	//두번째 인수로 콜백함수를 사용하여 부모의 리렌더링 시 과거와 현재 props가 바뀌었는지 판단한다.

	// 반환값에 따라, Props가 바뀌었는지 안바뀌었지 판단
	// T -> Props 바뀌지 않음 -> 리렌더링 X
	// F -> Props 바뀜 -> 리렌더링 O

	//✅id, isDone, content, date의 값이 바꼈는지를 확인한다.(조건에 걸리지 않으면 리렌더링 하지 않는다.)
	//prevProps : 과거
	//nextProps : 현재
	if (prevProps.id !== nextProps.id) return false;
	if (prevProps.isDone !== nextProps.isDone) return false;
	if (prevProps.content !== nextProps.content) return false;
	if (prevProps.date !== nextProps.date) return false;

	return true; //바뀌지 않았으면 return true를 반환하여 리렌더링 하지말아라.
});*/


