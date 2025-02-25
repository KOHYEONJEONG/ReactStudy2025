
//객체, 배열 순회

//실행 : node src/jsStudy/chapter20.js

let arr  = [1,2,3]

for(let i = 0; i<arr.length ; i++){
	//console.log(arr[i]);
}

// 1.2 for of 반복문
for (let item of arr) {
	//console.log(item);
	//1
	//2
	//3
}

// 1.2 for in 반복문 (인덱스)
for (let item in arr) {
	//console.log(item);
	//0
	//1
	//2
}

//2. 객체 순회
let person = {
	name: "ko",
	age: 29,
	hobby: "테니스",
};


//2-1.Object.keys 사용
// -> 객체에서 key값만 뽑아서 새로운 배열로 반환
let keys = Object.keys(person);//배열반환

for(let key of keys){
	//const value = person[key];
	//console.log(value)
	// ko
	// 29
	// 테니스
}

//2-2. Object.values
// -> 객체에서 value값만 뽑아서 새로운 배열로 반환
let values = Object.values(person);
for(let value of values){
	//console.log(value);
	// ko
	// 29
	// 테니스
}

//2-3. for in
for(let key in person){
	const  value= person[key];
	console.log(key," ",value)
	// name   ko
	// age   29
	// hobby   테니스
}