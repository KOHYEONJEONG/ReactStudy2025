//1.Spread 연산자
/// -> Spread : 흩뿌리다, 펼치다
// 객체나 배열에 저장된 여러개의 값을 개별로 흩뿌려주는 역할.



//👀 객체
let obj1 = {
    a:1,
    b:2
}

let obj2 = {
    ...obj1,
    c:3,
    d:4
}
console.log(obj2) //{ a: 1, b: 2, c: 3, d: 4 }


//👀 함수 - 배열 인자
let arr1 = [1,2,3];

// let arr2 = [arr1[0],arr1[1], arr1[2],4,5,6]; <- 이렇게 인덱스로 일일이 배열로 펼치는건 위험한 방법이다. 배열이란 값을 바꿔가면 사용하기 때문에

let arr2 = [...arr1, 4,5,6];
console.log(arr2) //[ 1, 2, 3, 4, 5, 6 ]

function funcA(p1, p2, p3){ //3개의 인자가 들어오늘걸 알았을때.
    console.log(p1,p2,p3)
}

funcA(...arr1) //1,2,3

// 2. Rest 매개변수
// Rest는 나머지, 나머지 매개변수
// 💥형태는 스프레드 연산자와 같지만, 엄연히 다름.

// function funcB(...rest){
function funcB(one ,...rest){
    console.log(rest); // 첫번째 원소를 제외하고 , 배열로 묶어서 출력
}

function funcC({...rest}){
    console.log(rest); // 첫번째 원소를 제외하고 , {}중괄호 필수
    //{ a: 1, b: 2, c: 3, d: 4 }
}


funcB(...arr1);
funcC(obj2);

//실행 :  node src\jsStudy\chapter04.js