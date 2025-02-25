
let person = {
	"name" : "ko",
	"age" : 29,
	"hobby" :"soccer"
}

//접근
let name = person.name;
let age = person["age"];
console.log(age)
let age2 = person["age2"];//없음
console.log(age2)//undefined


let property = "hobby"
let hobby = person[property];
console.log(hobby);//soccer

// 새로운 프로퍼티 추가
person.job = "fe devloper";
person["favoriteFood"] = "김밥"

// console.log(person)
// {
// 	name: 'ko',
// 	age: 29,
// 	hobby: 'soccer',
// 	job: 'fe devloper',
// 	favoriteFood: '김밥'
// }
//

// 프로퍼티 삭제
delete person.job
delete person["favoriteFood"]
//console.log(person) //{ name: 'ko', age: 29, hobby: 'soccer' }

// 프로퍼티 존대 유무 확인( in 연산자 )
let result1 = "name" in person;
let result2 = "cat" in person;

console.log(result1," ", result2);//true   false

// 상수 객체(const = 상수), 저장된 객체 값의 프로퍼티의 조작은 가능하다.
const animal = {
	type: "고양이",
	name: "나비",
	color: "black",
};
// 상수 변수는 변경할 수 없다 (const animal = 123 ❌).
// 단,상수 객체의 프로퍼티의 조작은 가능하다.⏬
// 상수의 객체는 추가,수정,삭제 조작은 가능하다.
animal.age = 2;//추가
animal.name = "까망이";//수정
delete animal.color;
console.log(animal);//{ type: '고양이', name: '까망이', age: 2 }

//메서드
const person2 = {
	name : "ko",
	sayHi(){//형태 : 메소드 선언 ( 익명 함수 또는 화살표 함수로 만들어도 됨, 화살표 함수보다 단축된 '메소드 선언')
		console.log("hi")
	}
}

// const obj = {
// 	sayHello: function() { // 전통적인 함수 표현식(ES5 이전버전에서도 가능)
// 		console.log('Hello!');
// 	}
// };

//메서드 호출
person2.sayHi()

//실행 : node src/jsStudy/chapter16.js