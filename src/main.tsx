import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Tastle } from "./Tastle";
import "./styles/globals.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Tastle />
  </StrictMode>
);
