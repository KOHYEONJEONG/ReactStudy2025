import React from 'react';
import { useDispatch } from 'react-redux';
import { increase, decrease} from '../store/actions.js';

function Counter() {
	const dispatch = useDispatch();

	return (
		<div>
			{/*<h1>카운터: {counter}</h1>*/}
			<button onClick={() => dispatch(increase())}>+</button>
			<button onClick={() => dispatch(decrease())}>-</button>
		</div>
	);
}

export default Counter;
