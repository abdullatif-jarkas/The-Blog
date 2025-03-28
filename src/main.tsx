import { lazy, StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./redux/store/index.ts";
import Layout from "./layout/Layout.tsx";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "sonner";
import Home from "./pages/Home/Home.tsx";
import Blog from "./pages/Blog/Blog.tsx";
import Newsletter from "./pages/Newsletter/Newsletter.tsx";
import Auth from "./pages/Auth/Auth.tsx";
import Dashboard from "./pages/Dashboard/Dashboard.tsx";

// Create a client
const queryClient = new QueryClient();

const routes = createBrowserRouter(
  [
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: "blog/:id",
          element: <Blog />,
        },
        {
          path: "new",
          element: <Newsletter />,
        },
        {
          path: "auth/:formType",
          element: <Auth />,
        },
        {
          path: "dashboard",
          element: <Dashboard />,
        },
      ],
    },
  ],
  { basename: "/The-Blog" }
);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={routes} />
        <Toaster />
      </QueryClientProvider>
    </Provider>
  </StrictMode>
);
