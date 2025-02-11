import { useState } from "react";

const Counter = () => {
	//Counter 컴포넌트의 count가 변해도 부모 and 형제 컴포넌트에 영향을 주지 않기때문에 불필요한 리렌더링이 이뤄지지 않는다.
	const [count, setCount] = useState(0);

	return (
		<div>
			<h1>{count}</h1>
			<button
				onClick={() => {
					setCount(count + 1);
				}}
			>
				+
			</button>
		</div>
	);
};

export default Counter;
