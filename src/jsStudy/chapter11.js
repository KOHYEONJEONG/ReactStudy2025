console.log(1);

//비동기 함수(3초가 지나면, 콜백함수 실행)
setTimeout(()=>{
    console.log(2);
}, 3000);

console.log(3);
//1
//3
//2