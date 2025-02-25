function returnFalse(){
console.log("False 함수")
return false;
}

function returnTrue(){
console.log("true 함수")
return true;}

console.log(returnFalse() && returnTrue())
//단락평가 작동(첫 번째 피연산자로 해당 연산의 결과 나옴)
// ㄴ> 뜻 : 논리연산식에서 '🚨첫번쨰 피연산자의 값만으로도 이 연산의 결과를 확정'지을 수 있다면 그때는 두 번째 피연산자에는 접근조차 하지 않는 그런 실행방식을 말한다.
// False 함수 <- returnFalse 함수 호출 (두번째 함수에는 접근조차 하지 않음)
// false     <- 연산 결과 값

console.log(returnTrue() && returnFalse())
// 단락평가 미작동(🚨뜻:첫번째 피연산자이 값만으로는 이 연산의 결과가 확정을 지을 수 없기에)
//true 함수
//False 함수
//false     <- 연산 결과 값


console.log(returnTrue() || returnFalse())
//단락평가 작동(첫 번째 피연산자로 해당 연산의 결과 나옴)
//true 함수
//true      <- 연산 결과 값
