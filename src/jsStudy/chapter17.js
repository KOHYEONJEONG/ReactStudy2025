// 배열

// 1. 배열 생성
let arrA = new Array(); // 배열 생성자
let arrB = []; // 배열 리터럴 (대부분 사용)

let arrC = [
	1,
	2,
	3,
	true,
	"hello",
	null,
	undefined,
	() => {console.log("안녕 나 화살표함수")},
	{"name":"ko"},
	[10,20,30],
];

// 2. 접근
arrC[7]();
console.log(arrC[8].name);
console.log(arrC[9][0]);
//실행 : node src/jsStudy/chapter17.js