// import type { RouteObject } from 'react-router';
import { createBrowserRouter } from "react-router-dom";

import { LandingPage } from "../../pages/landing/LandingPage";
import { ProfilesPage } from "../../pages/profiles/ProfilesPage";
import App from "../../App";
import { TimelinePage } from "../../pages/timeline/TimelinePage";
import { CreateNewProfileLayout } from "../../layouts/createNewProfile/CreateNewProfileLayout";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "",
        element: <LandingPage />,
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
