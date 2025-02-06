//간단한 비동기작업을 수행할 함수
function add(a,b, callback){

    //callback 함수는 비동기 작업이 끝난 후 결과값을 외부적으로 사용하기 위한 함수
    setTimeout(() => {
        const sum = a+b;
        callback(sum)
    }, 2000)

}

//add(1,2, (value) => {console.log(value)}); //3

//콜백함수가 길어지면, 인덴트가 늘어나는데
// 가독성이 떨어지고 콜백지옥으로 인해 나온 방안 Promise
const promise = new Promise((resolve, reject) => {

    //비동기 작업 실행하는 함수이며 executor 함수라 함

   const num = 10;

   if(typeof num === "number"){
    resolve("숫자다.") //then메소드로 결과 받음
   }else{
    reject("숫자가 아니다.")//catch메소드로 결과 받음음
   }
})
console.log(promise)//브라우저 콘솔에서 확인하자


//then 메서드
// 그 후에

// promise
//     .then((value) => {
//         console.log(value)//숫자다
//     }).catch((err) => {
//         console.log(err)
//     })

//함수로 관리하는 promise
function add10(num){
    const promise = new Promise((resolve, reject) => {

        //비동기 작업 실행하는 함수이며 executor 함수라 함
    
        if(typeof num === "number"){
            resolve(num + 10) //then메소드로 결과 받음
        }else{
            reject("숫자가 아니다.")//catch메소드로 결과 받음음
        }
    })

    return promise;//프로미스 객체 반환
}
const p = add10(0);
p.then((value) => {
    console.log(value);//10

    const newP = add10(value);
    return newP;

    }).then((value)=>{
        console.log(value);//20
    }).
    catch((err) => {
    })

    //💥 그래도 여전히 콜백지옥이 일어난다. 
    // 이 다음은 키워드 async/ await에 대해 배워보자.
    