import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import Layout from "./Layout";

// Thêm các import dưới đây (đúng đường dẫn tới các component của bạn)

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Layout></Layout>
    </BrowserRouter>
  </StrictMode>
);
