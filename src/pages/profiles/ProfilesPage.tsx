import { Box, Typography } from "@mui/material";
import { SelectActiveProfile } from "../../layouts/selectActiveProfile/SelectActiveProfile";

export function ProfilesPage() {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
      }}
    >
      <Typography variant="h2" sx={{ marginRight: "1em", color: "white" }}>
        Ready to get spooky?
      </Typography>
      <SelectActiveProfile />
    </Box>
  );
}
