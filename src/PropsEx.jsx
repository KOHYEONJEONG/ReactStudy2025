import './App.css';
import Header from './component/Header';//리액트 앱에서는 ES모듈시스템을 기본적으로 사용중이지만 확장자 생략 가능하다.
import Footer from './component/Footer';
import Main from './component/Main';
import Button from './component/Button';

  //HTML 태그들을 반환하는 함수를 특별히 component라고 부른다.
  // 함수명 컴포넌트
  // 앞글자는 꼭 대문자로 사용(컴포넌트라는 의미)
function App() {

  //객체형식으로 프로퍼트 값을 만들고
  const buttonProps ={
    text : "메일",
    color : "red"
  }

  return(
    <>
              {/* 스프레드 연산자로 넣어줌. */}
      <Button {...buttonProps}/>
      <Button text={"카페"}/>
      <Button text={"블로그"}>
        {/* <div>자식요소</div> */}
        <Header/>
      </Button>
    </>

  )
}

// 루트 컴포넌트 아래 (APP 컴포넌트)
// 헤더, 메인, 푸터 (자식 컴포넌트, 계층구조로 표현)

export default App
