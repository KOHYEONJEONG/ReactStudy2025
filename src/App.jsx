import { useMemo, useEffect, useState } from 'react';

import Editor from './todoProject/components/Editor';
import Header from './todoProject/components/Header';
import List from './todoProject/components/List';
import TodoItem from './todoProject/components/TodoItem';
function App() {
    return (
        <div className="List">
            <h4>Todo List 💫</h4>
            <input placeholder="검색어를 입력해주세요."></input>

            <div>
                <TodoItem />
                <TodoItem />
                <TodoItem />
            </div>
        </div>
    );
}

export default App;
