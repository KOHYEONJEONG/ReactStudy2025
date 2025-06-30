import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { changeText, addToList } from '../store/actions.js';

function TodoList() {
	const { text, list } = useSelector(state => state);
	const dispatch = useDispatch();

	return (
		<div>
			<h2>텍스트: {text}</h2>
			<input onChange={e => dispatch(changeText(e.target.value))} />

			<button onClick={() => dispatch(addToList({ id: list.length + 1, text }))}>
				리스트에 추가
			</button>

			<ul>
				{list.map(item => (
					<li key={item.id}>{item.text}</li>
				))}
			</ul>
		</div>
	);
}

export default TodoList;
