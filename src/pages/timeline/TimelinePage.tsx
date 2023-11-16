import { Sidebar } from "../../components/sidebar/Sidebar";
import { Timeline } from "../../layouts/timeline/Timeline";
import { Box } from "@mui/material";
import { useAppSelector } from "../../store/store";
import { Navigate } from "react-router-dom";

export function TimelinePage() {
  const activeProfile = useAppSelector((state) => state.profile.details.username);
  

  if(!activeProfile) { 
    return <Navigate to='profiles' />
    
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
