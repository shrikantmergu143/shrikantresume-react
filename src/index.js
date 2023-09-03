import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import App from "./App";
// import Index from "./components";
// import PdfConvertor from "./components/PdfConvertor";
// import Sample from "./components/Sample";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
    {/* <PdfConvertor/> */}
    {/* <Sample/> */}
  </StrictMode>
);
