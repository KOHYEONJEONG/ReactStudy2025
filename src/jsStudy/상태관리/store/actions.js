import { INCREASE, DECREASE, CHANGE_TEXT, ADD_TO_LIST } from './actionTypes.js';

export const increase = () => ({ type: INCREASE }); // 계산기
export const decrease = () => ({ type: DECREASE }); // 계산기
export const changeText = (text) => ({ type: CHANGE_TEXT, text }); //사용처 : TodoList
export const addToList = (item) => ({ type: ADD_TO_LIST, item }); //사용처 : TodoList

// 사용처 : src/jsStudy/상태관리/component/Counter.jsx
// 사용처 : src/jsStudy/상태관리/component/TodoList.jsx