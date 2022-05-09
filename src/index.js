/* Библиотеки */
import React from "react";
import ReactDOM from "react-dom/client";

/* Стили */
import "./styles/style.scss";

/* Шрифты */
// import "./assets/fonts/fonts.css"; // Если есть файлом

/* Компоненты */
import App from "./components/App";

/*------------------------------------*/

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
	<React.StrictMode>
		<App />
	</React.StrictMode>,
);
