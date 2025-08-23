import { createRoot } from "react-dom/client";
import { App } from "./app";
import "./styles.css";

document.addEventListener("DOMContentLoaded", () => {
	const rootElem = document.getElementById("root");

	if (!rootElem) {
		throw new Error("No root element");
	}

	const root = createRoot(rootElem);

	root.render(<App />);
});
