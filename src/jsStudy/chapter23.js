//async
// ⭐어떤 함수를 비동기 함수로 만들어주는 키워드
// 함수가 프로미스를 반환하도록 반환해주는 그런 키워드
async function getData(){
    return{
        name : "ko",
        id : "kokoko"
    };
}

// 🚨async 키워드와 promise를 같이 쓴다면?
//만약 애초에 promise객체가 있는 함수면 별다른 기능을 하지 않고 promise가 반환되도록 내버려둔다.
async function getData2(){
    return new Promise((resovle, reject)=> {
        setTimeout(()=>{
            resovle({
                name:"ko"
            })
    },1500);
    })
}

console.log(getData())
console.log(getData2())
getData2().then((result)=>{
    console.log(result)
})

// await 키워드
// 🚨async 함수 내부에서만 사용이 가능한 키워드(async가 붙지 않은 함수에서 사용시 오류발생!)
// 비동기 함수가 다 처리되기를 기다리는 역할
async function printDatat(){
    const data = await getData();//종료되기를 기다렸다가 값 반환(간결하다!)
    console.log(data);//{ name: 'ko' }

}

//실행 : node src/jsStudy/chapter23.js