import { useAppSelector } from "../../../store/store";
import { LandingPage } from "../../../pages/landing/LandingPage";

export function PrivateRoute({children} : {children: JSX.Element}) {
  const user = useAppSelector((state) => state.user.details.uuid);
  console.log('inside private route', user);

  if(!user) {
    return (
      <LandingPage />
    ) 
  }
  return children;
}
