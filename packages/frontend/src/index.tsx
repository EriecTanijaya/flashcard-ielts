import { createRoot } from "react-dom/client";
import { App } from "./app";
import "./styles.css";

/**
 * To check this, you can check document.readyState when your content script runs. If the state is interactive or complete, then the DOMContentLoaded event has already fired and you should just run the code directly.
 *
 * for mobile ios
 *
 */

// const rootElem = document.getElementById("root");

// if (!rootElem) {
// 	throw new Error("Root element not found");
// }

// const root = createRoot(rootElem);

// root.render(<App />);
