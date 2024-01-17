import { useAppSelector } from "../../../store/store";
import { LandingPage } from "../../../pages/landing/LandingPage";

export function PrivateRoute({ children }: { children: JSX.Element }) {
  const user = useAppSelector((state) => state.user.details.uuid);

  if (!user) {
    return <LandingPage />;
  }
  return children;
}
