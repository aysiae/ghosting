import { Box } from "@mui/material";
import { SelectActiveProfile } from "../../layouts/SelectActiveProfile";

export function ProfilesPage() {

  return (
    <Box sx={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      minHeight: '100vh'
    }}>
      <h2 style={{marginLeft: '1em', color: 'white'}}>Ready to get spooky?</h2>
      <SelectActiveProfile />
    </Box>
  );
}
