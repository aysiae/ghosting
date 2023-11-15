// import type { RouteObject } from 'react-router';
import { createBrowserRouter } from "react-router-dom";

import App from "../../App";
import { TimelinePage } from "../../pages/timeline/TimelinePage";
import { CreateNewProfileLayout } from "../../layouts/createNewProfile/CreateNewProfileLayout";
import { PrivateRoute } from "./private/privateRoute";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "",
        element: <PrivateRoute><TimelinePage /></PrivateRoute>,
      },
      {
        path: "dev",
        element: <CreateNewProfileLayout />,
      },
    ],
  },
]);
