import { createBrowserRouter,RouterProvider } from "react-router-dom"
import Home from "./pages/Home"
import Products from "./pages/Products"
import Layout from "./pages/Layout"
import SingleProduct from "./pages/SingleProduct"

function App() {
  const router = createBrowserRouter([
      {
        path:"/",
        element:<Layout />,
        children: [
          {
            path: "/",
            element:<Home />
          },
          {
            path:"/products/:id",
            element: <Products />
          },
          {
            path:"/product/:id",
            element: <SingleProduct />
          }
        ]
      }
  ])



  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
