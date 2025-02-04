//👀1. 배열 순회
let arr = [1,2,3];

//배열 인덱스
for(let i=0; i<arr.length; i++){//length : 모든 배열이 지니고 있는 기본적인 프로퍼티이다.(배열도 특수한 객체이기 때문이다.)
   // console.log(arr[i])
}

//💥for of 는 배열만 사용가능
// for of 반복문(차이점 : 출력만 하지 저장은 하지 않는다.)
for(let item of arr){//of 뒤에있는 배열의 값을 하나씩 순서대로 item에다가 저장한다.
    //console.log(item)
}

//👀2. 객체 순회
let person = {
    name : "ko",
    age:27,
    hobby:"테니스"
}

//2.1 Object.keys 사용( 내장함수 )
// -> 객체에서 key 값들만 뽑아서 새로운 '배열'로 반환
let keys = Object.keys(person);
//console.log(keys);//[ 'name', 'age', 'hobby' ]

for(let key of keys){
    // console.log(item)
    //console.log(key, person[key])//name ko
}

//2.2 Object.values 사용( 내장함수 )
// -> 객체에서 value 값들만 뽑아서 새로운 배열로 반환
let values = Object.values(person);
for(let value of values){
  //  console.log(value)
}


//💥for in 는 객체만 사용가능
//2.3 for in
for(let key in person){
    const value = person[key];
    console.log(key, value) //name ko
}

// node src\jsStudy\chapter06.js