import { createStore } from 'redux';

// createStore는 스토어를 만들어주는 함수입니다.
// 리액트 프로젝트에서는 단 하나의 스토어를 만듭니다.

/* redux가 관리할 상태들의 초기값 */
const initialState = {
	counter: 0,
	text: '',
	list: []
};

/* 액션 Type : 어단 행동을 할것인지 명시하는 상수(type은 문자열이고 필수) */
const INCREASE = 'INCREASE';
const DECREASE = 'DECREASE';
const CHANGE_TEXT = 'CHANGE_TEXT';
const ADD_TO_LIST = 'ADD_TO_LIST';

/* 액션 생성함수 정의 */
// 액션 생성함수는 주로 camelCase 로 작성합니다.
function increase() {
	return {
		type: INCREASE // 액션 객체에는 type 값이 필수입니다.
	};
}

// 화살표 함수로 작성하는 것이 더욱 코드가 간단하기에,
// 이렇게 쓰는 것을 추천합니다.
const decrease = () => ({
	type: DECREASE
});

const changeText = text => ({
	type: CHANGE_TEXT,
	text // 액션안에는 type 외에 추가적인 필드를 마음대로 넣을 수 있습니다.
});

const addToList = item => ({
	type: ADD_TO_LIST,
	item
});

/* 리듀서 만들기 */
// 위 액션 생성함수들을 통해 만들어진 객체들을 참조하여
// 새로운 상태를 만드는 함수를 만들어봅시다.(변화를 일으키는 함수)
// 주의: 리듀서에서는 불변성을 꼭 지켜줘야 합니다!

function reducer(state = initialState, action) {
	// state 의 초깃값을 initialState 로 지정했습니다.
	switch (action.type) {
		case INCREASE:
			return {
				...state,
				counter: state.counter + 1
			};
		case DECREASE:
			return {
				...state,
				counter: state.counter - 1
			};
		case CHANGE_TEXT:
			return {
				...state,
				text: action.text
			};
		case ADD_TO_LIST:
			return {
				...state,
				list: state.list.concat(action.item) //concat 사용하여 불변성 유지
			};
		default:
			console.log("default")
			return state;
	}
}
console.log("----------------------------------")
/* 스토어 만들기 */
const store = createStore(reducer); // 출력: default, 우리가 만든 액션 타입이 아님 → switch의 default로 빠짐
console.log("----------------------------------")


// 스토어안에 들어있는 상태가 바뀔 때 마다 호출되는 listener 함수
const listener = () => {
	const state = store.getState();
	console.log(state);
};

//store.subscribe(listener); 이렇게만 쓰면
const unsubscribe = store.subscribe(listener);
// 구독을 해제하고 싶을 때는 unsubscribe() 를 호출하면 됩니다.

// 액션들을 디스패치 해봅시다.
store.dispatch(increase()); 							//출력: { counter: 1, text: '', list: [] }
store.dispatch(decrease());			 					//출력: { counter: 0, text: '', list: [] }
store.dispatch(changeText('안녕하세요'));			//출력: { counter: 0, text: '안녕하세요', list: [] }
store.dispatch(addToList({ id: 1, text: '와우' }));//출력: { counter: 0, text: '안녕하세요', list: [{ id: 1, text: '와우' }] }


// 실행 : node src/jsStudy/상태관리/exercise.js