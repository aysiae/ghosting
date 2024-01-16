import { Sidebar } from "../../components/sidebar/Sidebar";
import { Timeline } from "../../layouts/timeline/Timeline";
import { Box } from "@mui/material";
import { useAppSelector } from "../../store/store";
import { Navigate } from "react-router-dom";
import { navigation } from "../../immutables/navigation";

export function TimelinePage() {
  const activeProfile = useAppSelector((state) => state.profile.details.username);
  

  if(!activeProfile) { 
    return <Navigate to={navigation.profiles.path} />
    
  }

  return (
    <Box
      style={{
        display: "flex",
        flexDirection: "row",
        width: "100%",
        height: "100%",
      }}
    >
      <Sidebar />
      <Timeline />
    </Box>
  );
}
