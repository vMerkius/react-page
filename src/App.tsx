import { createBrowserRouter, RouterProvider } from "react-router";
import Home from "./pages/home";
import ProductsDetails from "./pages/products-details";
import ProductsPage from "./pages/products";
import WIPPage from "./pages/wip";
import CartPage from "./pages/cart";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ToastContainer } from "react-toastify";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/products",
    element: <ProductsPage />,
  },
  {
    path: "/products/:id",
    element: <ProductsDetails />,
  },
  {
    path: "/cart",
    element: <CartPage />,
  },
  {
    path: "*",
    element: <WIPPage />,
  },
]);

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="App">
        <RouterProvider router={router} />
        <ToastContainer autoClose={2000} />
      </div>
    </QueryClientProvider>
  );
}

export default App;
