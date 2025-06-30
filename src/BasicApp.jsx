import "./App.css";
import { useState } from "react";
function BasicApp() {
    //ReduxApp.jsx는 아래 같은 props로 여러번 넘길 필요없고 상태관리 방법 중 하나.
    
    const [number,setNumber] = useState(1)
    return (
        <div id="container">
            <h1>Root {number}</h1>
            <div id="grid">
                <Left1 number={number}/>
                <Right1 onIncrease={()=>{
                    setNumber(number+1);
                }}/>
            </div>

        </div>
    );
}
export default BasicApp;

function Left1(props){

    return(
        <div>
            <h1>Left1</h1>
            <Left2 number={props.number} />
        </div>
    )
}
function Left2(props){

    return(
        <div>
            <h1>Left2</h1>
            <Left3 number={props.number}/>
        </div>
    )
}

function Left3(props){

    return(
        <div>
            <h1>Left3 : {props.number}</h1>
        </div>
    )
}

function Right1(props){

    return(
        <div>
            <h1>Right1</h1>
            <Right2
                onIncrease={props.onIncrease} //그냥 부모의 onIncrease 함수 레퍼런스를 그대로 전달함. (불필요한 함수 래핑 없이)
            />
        </div>
    )
}

function Right2(props){

    return(
        <div>
            <h1>Right2</h1>
            <Right3
                onIncrease={()=>{
                    props.onIncrease() //onIncrease를 익명 함수로 한 번 감싸서 전달함. 즉, 새로운 함수 객체가 매 렌더마다 생성됨
                }}
            />
        </div>
    )
}

function Right3(props){

    return(
        <div>
            <h1>Right3</h1>
            <input
                type="button"
                value="+"
                onClick={()=>{
                    props.onIncrease() //부모 함수 실행되게
                }}/>
        </div>
    )
}