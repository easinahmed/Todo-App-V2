import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import Home from "./page/Home";

const App = () => {

const router = createBrowserRouter([
  {
    path: "/",
    element: < Home/>,
  },
]);

  return (
    <RouterProvider router={router} />
  )
}

export default App