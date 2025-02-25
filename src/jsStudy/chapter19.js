// 1. 배열의 구조 분해 할당(대괄호)
// 뜻 : 배열에 있는 원소들을 아주 간결하게 변수들의 순서대로 하나씩 조회
let arr = [1, 2, 3];

let [one, two, three, four = 4] = arr;
console.log(one, two, three, four);// 1 2 3 4
// 추가로 (4는 arr 변수의 없는 값이지만, 기본값으로 지정해서 추출하면 되고 기본값조차 없으면 undefined이다.)

let [one1, two1] = arr;
console.log(one1, two1); // 필요한 값만 조회해도 된다.

// 2. 객체의 구조 분해 할당(중괄호)
let person = {
	name: "ko",
	age: 29,
	hobby: "테니스",
};

let {
	age: myAge,//할당받는 프로퍼티 명칭 변경할 수 있다. -> 콜론 사용 -> (기존 key 명칭 : 변경할 key 명칭)
	hobby,
	name,
	extra = "hello",
} = person;

// 3. 객체 구조 분해 할당을 이용해서 함수의 매개변수를 받는 방법
const func = ({ name, age, hobby, extra }) => {// 객체로 넘어올 때만 중괄호({})를 사용하여 객체 구조분해 하면됨. <- 🚨 일반 값을 넘겼을떄 중괄호때문에 못받아옴, 객체 값으로 전달 받을때만 중괄호 사용
    //화살표함수
	console.log(name, age, hobby, extra);
};

func(person);

//chapter04.js랑 같이 보기

//실행 : node src/jsStudy/chapter19.js