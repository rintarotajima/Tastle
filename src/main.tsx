import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Tastle } from "./components/Tastle";
import "./index.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Tastle />
  </StrictMode>
);
