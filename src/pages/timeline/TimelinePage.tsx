import { Sidebar } from "../../components/sidebar/Sidebar";
import { Timeline } from "../../layouts/timeline/Timeline";
import { Box } from "@mui/material";

export function TimelinePage() {
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
