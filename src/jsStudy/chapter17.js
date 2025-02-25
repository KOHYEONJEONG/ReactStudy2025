// 배열

// 1. 배열 생성
let arrA = new Array(); //방법1 :  배열 생성자
let arrB = [];          // 방법2 :배열 리터럴 (대부분 사용)

// 1-1. 값 넣기(콤마로 구분)
// 어떤 타입의 값이든 넣을 수있고, 길이에 한도도 없다.
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