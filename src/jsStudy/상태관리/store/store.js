import { createStore } from 'redux';// createStore는 스토어를 만들어주는 함수입니다., 리액트 프로젝트에서는 단 하나의 스토어를 만듭니다.
import reducer from './reducer.js';

const store = createStore(reducer);
export default store;


// 사용처 : /src/main.jsx
