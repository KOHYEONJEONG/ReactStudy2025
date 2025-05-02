import { memo } from "react";

const Header = () => {
	return (
		<div className="Header">
			<div>오늘은 📆</div>
			<h1>{new Date().toDateString()}</h1>
		</div>
	);
};

//메모제이션(최적화)된 Header 컴포넌트
//React.memo
// > 컴포넌트를 인수로 받아, 최적화된 컴포넌트를 만들어 반환한다.
// 인수 : 컴포넌트
//이렇게 최적화 기능이 추가된 컴포넌트는 이제는 props를 기준으로 메모이제이션됩니다.
//구체적으로는 이제는 부모컴포넌트가(App) 리렌더링이 되더라도
//자신이 받는 props가 바뀌지 않으면 다시는 리렌더링이 발생하지 않는다.
// export default memo(Header);//memo로 최적화됨.(🚨 Header는 굳이 memo를 사용할 필요 없다)
export default Header;

//개발자도구 > 컴포넌트s > 하이라이터 체크후 노란색박스가 있는곳은 리렌더링 되는거임.