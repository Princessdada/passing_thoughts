import React from "react";
import "./index.css";

import { createRoot } from "react-dom/client";
import App from "./App";
import "./App.css"; // Assuming the CSS file is named App.css

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);
root.render(<App />);
