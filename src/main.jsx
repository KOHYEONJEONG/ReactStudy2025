import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import ReduxApp from "./ReduxApp.jsx";
import BasicApp from "./BasicApp.jsx";
import Counter from "./Counter.jsx";
import HookApp from "./HookApp.jsx";
import RegisterApp from "./RegisterApp.jsx";
import CounterApp from "./CounterApp.jsx";
import PropsApp from "./PropsApp.jsx";
import TodoListContextApp from "./TodoListContextApp.jsx";

import { Provider } from 'react-redux';
import store from './jsStudy/상태관리/store/store.js'; // 너가 만든 store 경로

// createRoot(document.getElementById("root")).render(<App />);
createRoot(document.getElementById("root")).render(
	<Provider store={store}>
		<App />
	</Provider>
);
