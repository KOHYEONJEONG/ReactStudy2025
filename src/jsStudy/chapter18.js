// 1. Falsy(펄시)한 값 = 거짓 같은 값
let f1 = undefined;
let f2 = null;
let f3 = 0;
let f4 = -0;
let f5 = NaN;
let f6 = "";
let f7 = 0n;//bigInteger : 아주아주 큰 숫자를 저장하는데 사용(웹개발중 사용할 일은 거의 없음)

// 2. Truthy(트루쒸) 한 값 = 참 같은 값
// -> 7가지 Falsy 한 값들 제외한 나머지 모든 값
let t1 = "hello";//비어 있지 않은 문자열인.
let t2 = 123;//0이 아닌 숫자나
let t3 = [];//빈 배열
let t4 = {};//빈 객체
let t5 = () => {};//화살표함수

// 3. 활용 사례(대표 사례 : person객체가 있다면 name 프로퍼티 출력 )
function printName(person) {
    //가정 : 어떠한 이유로 let person;이 되었다고 가정
	if (!person) {//🚨Truthy 와 Falsy를 사용하여 간결해짐.
	    // Truthy 와 Falsy를 사용하지 않는다면? (person === undefined || person === null)
		console.log("person의 값이 없음");
		return;
	}
	console.log(person.name);
}

let person = { name: "ko" };
printName(person);//ko

let person2;
printName(person2);//person의 값이 없음

//node src/jsStudy/chapter18.js