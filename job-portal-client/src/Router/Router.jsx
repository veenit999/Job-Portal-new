import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../Pages/Home";
import Createjobs from "../Pages/Createjobs";
import Myjobs from "../Pages/Myjobs";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path : "/post-job",
        element : <Createjobs/>
      },
      {
        path : "/my-job",
        element : <Myjobs/>
      },
    ],
  },
]);

export default router;
