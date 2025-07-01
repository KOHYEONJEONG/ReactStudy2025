import { INCREASE, DECREASE, CHANGE_TEXT, ADD_TO_LIST } from './actionTypes.js';

/* redux가 관리할 상태들의 초기값 */
const initialState = {
	counter: 0,
	text: '',
	list: []
};

export default function reducer(state = initialState, action) {
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

// 사용처 : src/jsStudy/상태관리/store/store.js