import { useState } from "react";
import "./App.css";
import Counter from "./jsStudy/상태관리/component/Counter.jsx";
import MyPage from "./jsStudy/상태관리/component/MyPage.jsx";

function App() {

	return (
		<div>
			<Counter></Counter>
			<br/>
			<MyPage></MyPage>
		</div>
	);
}
export default App;
