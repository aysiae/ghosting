// import type { RouteObject } from 'react-router';
import { createBrowserRouter } from "react-router-dom";

import App from "../../App";
import { ProfilesPage } from "../../pages/profiles/ProfilesPage";
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
        path: "timeline",
        element: <TimelinePage />,
      },
      {
        path: "profiles",
        element: <ProfilesPage />,
      },
      {
        path: "dev",
        element: <CreateNewProfileLayout />,
      },
    ],
  },
]);
