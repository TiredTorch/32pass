import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import App from "./app/App";

if ("serviceWorker" in navigator) {
  navigator.serviceWorker.register("/sw.js", {scope: "/"});
}

const root = createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
