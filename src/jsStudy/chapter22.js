//Truthy와 Falsy한 값으로 return해보자

// 👀예시1
function returnFalse(){
console.log("False 함수")
return undefined;// Falsy 한 값
}

function returnTrue(){
console.log("true 함수")
return 10;}// Truthy 한 값

console.log(returnFalse() && returnTrue())
//단락평가 작동(첫번째 피연산자로 연산 결과 화정)
//False 함수
//undefined (false가 아닌 Falsy 한 값으로 출력이 된다.)

console.log(returnTrue() && returnFalse())
//단락평가 미작동(첫번째 값으로 평가 연산의결과를 확정짓지 못했기에)
//true 함수
//False 함수
//undefined

console.log(returnTrue() || returnFalse())
//단락평가 작동(첫번째 피연산자로 연산 결과 화정)
//true 함수
//10 <- 연산의 결과(true가 아닌 Truthy 한 값으로 출력이 된다.)


// 👀예시2
function printName(person) {
    const name = person && person.name;
    console.log(name || "person의 값이 없음");
}

let person = { name: "ko" };
printName(person);//ko  (단락평가 작동 : 왼쪽이 TRUE라 우측 피연산자 접근조차 하지 않음.)
printName();//person의 값이 없음 (단락평가 미작동: 왼쪽이 False라 우측 피연산자 접근함.)