import { Box, Button, FormControl, TextField, Typography } from "@mui/material";

export function CreateProfile() {
  return (
    <Box>
      <Typography sx={{ textAlign: "center", mb: 2 }}>
        JUST A FEW QUICK DETAILS
      </Typography>
      <FormControl sx={{ width: "100%" }}>
        <TextField
          sx={{ mb: 2 }}
          variant="standard"
          placeholder="Display Name"
        />
        <TextField
          sx={{ mb: 2 }}
          variant="standard"
          placeholder="Profile Handle"
        />
        <TextField
          sx={{ mb: 2 }}
          variant="standard"
          placeholder="Avatar Image Url"
        />
        <TextField sx={{ mb: 2 }} variant="standard" placeholder="Pronouns" />
        <TextField
          sx={{ mb: 2 }}
          variant="standard"
          placeholder="Description"
        />
        <Button variant="contained">Create!</Button>
      </FormControl>
    </Box>
  );
}
