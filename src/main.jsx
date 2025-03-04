import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import Counter from "./Counter.jsx";
import CounterApp from "./CounterApp.jsx";
import TodoListContextApp from "./TodoListContextApp.jsx";
createRoot(document.getElementById("root")).render(
        <TodoListContextApp />
);
