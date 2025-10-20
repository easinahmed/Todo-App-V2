import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import Navbar from "./components/Navbar";

const App = () => {

const router = createBrowserRouter([
  {
    path: "/",
    element: <Navbar/>,
  },
]);

  return (
    <RouterProvider router={router} />
  )
}

export default App