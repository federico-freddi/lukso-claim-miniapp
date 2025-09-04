import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { LuksoAuthProvider } from "./context/LuksoAuthContext";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <LuksoAuthProvider>
      <App />
    </LuksoAuthProvider>
  </StrictMode>
);
