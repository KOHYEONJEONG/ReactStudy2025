/*
const Button = (props) => {
    //객체로 넘어옴
    console.log(props)//{text: '메일'}
    return <button style={{color:props.color}}>{props.text}</button>
};
*/

//객체의 구조분해할당 이용하기
const Button = ({text, color = "bl", children}) => {

const onClickButton = () => {
    console.log(text)
}

//children : 부모 컴포넌트에서 자식 컴포넌트에게 값을 전달
    return(
    <button style={{color:color}} onClick={onClickButton}>
        {text}
        {children}
    </button>
) };

//기본값을 주면 오류 안남
Button.defaultProps ={
    color:"green"
}

export default Button;
