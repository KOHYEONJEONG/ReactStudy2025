import './App.css';
import { useMemo, useEffect, useState } from 'react';
import Editor from './todoProject/component/Editor';
import Header from './todoProject/component/Header';
import List from './todoProject/component/List';
function App() {
  return (
    <div className="List">
      <h4>Todo List 💫</h4>
      <input placeholder="검색어를 입력해주세요."></input>
    </div>
  );
}

export default App;
