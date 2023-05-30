import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import Home from "./components/Home/Home";
import RouteError from "./components/Error/RouteError";
import FriendDetail from "./components/FriendDetail/FriendDetail";

function App() {
  const router = createBrowserRouter([
    { path: "/", element: <Home />, errorElement: <RouteError /> },
    {
      path: "/friend/:friendId",
      element: <FriendDetail />,
    },
  ]);
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
