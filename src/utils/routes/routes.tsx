// import type { RouteObject } from 'react-router';
import { createBrowserRouter } from "react-router-dom";
import { TimelinePage } from "../../pages/timeline/TimelinePage";
import { CreateNewProfileLayout } from "../../layouts/createNewProfile/CreateNewProfileLayout";
import { PrivateRoute } from "./private/privateRoute";
import { ProfilesPage } from "../../pages/profiles/ProfilesPage";

import App from "../../App";


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
        path: "profiles",
        element: <PrivateRoute><ProfilesPage /></PrivateRoute>
      },
      {
        path: "dev",
        element: <CreateNewProfileLayout />,
      },
    ],
  },
]);
