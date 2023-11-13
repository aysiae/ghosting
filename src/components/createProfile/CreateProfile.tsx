import { Box, Button, FormControl, TextField } from "@mui/material";

export function CreateProfile() {
  return (
    <Box>
      <FormControl>
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
