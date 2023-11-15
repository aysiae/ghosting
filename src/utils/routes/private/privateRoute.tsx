import { useAppSelector } from "../../../store/store";
import { LandingPage } from "../../../pages/landing/LandingPage";
import { ProfilesPage } from "../../../pages/profiles/ProfilesPage";

export function PrivateRoute({children} : {children: JSX.Element}) {
  const user = useAppSelector((state) => state.user.details.uuid);
  const activeProfile = useAppSelector((state) => state.profile.details.username);

  if(!user) {
    return (
      <LandingPage />
    ) 
  } else if (!activeProfile) {
      return (
        <ProfilesPage />
      )

  }
  return children;
}
