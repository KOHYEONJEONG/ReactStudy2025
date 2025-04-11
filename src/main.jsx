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

createRoot(document.getElementById("root")).render(
        <CounterApp />
);
