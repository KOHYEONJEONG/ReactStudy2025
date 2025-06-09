import { useState } from "react";
import "./App.css";

const useCount = () => {
	const [count, setCount] = useState(0);

	return [count, setCount];
};
function App() {
	const [count, setCount] = useCount();

	return (
		<div>
			{count}
			<button onClick={() => setCount((C) => C + 1)}>+1</button>
		</div>
	);
}
export default App;
