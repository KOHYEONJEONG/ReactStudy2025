import { useSelector } from 'react-redux';
import React from "react";

export default  function MyPage() {

	const counter = useSelector(state => state.counter);
	return <div>
		<h1>Current Value</h1>
		현재 카운터 값은 {counter}입니다</div>;
}
