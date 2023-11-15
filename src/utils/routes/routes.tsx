// import type { RouteObject } from 'react-router';
import { createBrowserRouter } from "react-router-dom";

import App from "../../App";
import { TimelinePage } from "../../pages/timeline/TimelinePage";
import { CreateNewProfileLayout } from "../../layouts/createNewProfile/CreateNewProfileLayout";
import { PrivateRoute } from "./private/privateRoute";
import { ProfilesPage } from "../../pages/profiles/ProfilesPage";

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
        path: "/profiles",
        element: <PrivateRoute><ProfilesPage /></PrivateRoute>
      },
      {
        path: "dev",
        element: <CreateNewProfileLayout />,
      },
    ],
  },
]);
