import "./App.css";
import { useState } from "react";
function BasicApp() {
    const [number,setNumber] = useState(1)
    return (
        <div id="container">
            <h1>Root</h1>
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
            <Right2 onIncrease={()=>{
                props.onIncrease() //부모 함수 실행되게
            }}/>
        </div>
    )
}

function Right2(props){

    return(
        <div>
            <h1>Right2</h1>
            <Right3
                onIncrease={()=>{
                    props.onIncrease() //부모 함수 실행되게
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