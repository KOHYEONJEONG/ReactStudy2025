import "./App.css";
import { useMemo, useEffect, useState } from "react";

//https://itprogramming119.tistory.com/entry/React-useMemo-%EC%82%AC%EC%9A%A9%EB%B2%95-%EB%B0%8F-%EC%98%88%EC%A0%9C
function App() {
	const [number, setNumber] = useState(0);
	const [isKorea, setIsKorea] = useState(true);

	const location = useMemo(() => {
		return {
			country: isKorea ? "한국" : "일본",
		};
	}, [isKorea]);

	// const location2 = { country: isKorea ? '한국' : '일본' }; 눈으로 보이기에는 똑같지만 저장된 메모리 상의 주소가 완전히 다르기 때문에 useEffect의 location은 변경이 되었다고 생각할 수 있습니다.
	const location2 = { country: isKorea ? "한국" : "일본" };

	useEffect(() => {
		console.log("useEffect... 호출");
		// 뭔가 오래 걸리는 작업
	}, [location]);

	return (
		<header className="App-header">
			<h2>하루에 몇 끼 먹어요?</h2>
			<input type="number" value={number} onChange={(e) => setNumber(e.target.value)} />
			<hr />

			<h2>어느 나라에 있어요?</h2>
			<p>나라: {location.country}</p>
			<button onClick={() => setIsKorea(!isKorea)}>Update</button>
		</header>
	);
}

export default App;
