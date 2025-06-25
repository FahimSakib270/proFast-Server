import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router";
import { router } from "./Router/Router.jsx";
import "aos/dist/aos.css";
import AOS from "aos";
import AuthProvider from "./context/AuthContext/AuthProvider.jsx";
AOS.init();

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <div className="urbanist-fonts max-w-7xl mx-auto ">
      <AuthProvider>
        <RouterProvider router={router}></RouterProvider>
      </AuthProvider>
    </div>
  </StrictMode>
);
