console.log(1);

//비동기 함수(3초가 지나면, 콜백함수 실행)
//Web Apis에 setTimeout 타이머와, 콜백함수까지 같이 넘겨줌
//동기와 비동기 파일 참고
setTimeout(() => {
	console.log(2);
}, 3000);

console.log(3);
//1
//3
//2
