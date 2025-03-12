import "./App.css";
import { useState } from "react";
import Bulb from "./componens/Bulb";
import Counter from "./components/Counter";

function App() {
	return (
		<>
			{/* 부모 컴포넌트에서는 자식 컴포넌트 렌더링만 해주기 */}
			<Bulb />
			<Counter />
		</>
	);
}

export default App;
