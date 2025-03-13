import "./App.css";
import { useState } from "react";

import {createStore} from "redux";
import {Provider, useSelector, useDispatch, connect} from 'react-redux';
function  reducer(currentState, action){

    if(currentState === undefined) {  //빈값이면 1을 반환
        return {
            number : 1
        }
    }

    //과거의 객체를 복제
    // ㄴ(불변성 유지 : 내부적으로 데이터가 변경되는것을 감지하기 때문이며 겉핥기 식으로 비교할 수 있어 좋은 성능을 유지할 수 있다.)
    const newState = {...currentState};

    if(action.type === "PLUS"){
        newState.number++; //증가된 값이 return 됨.
    }

    return newState;

}

//✅store 지정하여 Provider props로 넣어줌.
const store = createStore(reducer);

function ReduxApp() {
    return (
        <div id="container">
            <h1>Root</h1>
            <div id="grid">
                <Provider store={store}>
                    {/*이제 Left1, Right1 컴포넌트는 store를 사용할 수 있다.*/}
                    <Left1 />
                    <Right1 />
                </Provider>
            </div>

        </div>
    );
}
export default ReduxApp;

function Left1(){
    console.log("1");
    return(
        <div>
            <h1>Left1</h1>
            <Left2/>
        </div>
    )
}
function Left2(){
    console.log("2");
    return(
        <div>
            <h1>Left2</h1>
            <Left3/>
        </div>
    )
}

function Left3(){
    console.log("3");

    function f(state){
        return state.number;
    }

    //number를 무선으로 받으려면 useSelector를 사용한다.
    //✅ 함수를 인자로 넣음, state를 입력값으로 받고 state 중 어떤 값을 사용할지 지정
    // const number = useSelector(f);
    const number = useSelector(state => state.number);//store에 저장된 number State를 가져온다.

    return(
        <div>
            {/*number 무선으로 연결*/}
            <h1>Left3 : {number}</h1>
        </div>
    )
}

function Right1(){

    return(
        <div>
            <h1>Right1</h1>
            <Right2 />
        </div>
    )
}

function Right2(){

    return(
        <div>
            <h1>Right2</h1>
            <Right3 />
        </div>
    )
}

function Right3(){
    //버튼 클릭시 number State 값 변경하게~
    const dispatch = useDispatch();

    return(
        <div>
            <h1>Right3</h1>
            <input
                type="button"
                value="+"
                onClick={()=>{
                    dispatch({"type":"PLUS"})    //✅ 무선으로 연결,
                }}/>
        </div>
    )
}