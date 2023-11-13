import Avatar from "@mui/material/Avatar";
import TextField from "@mui/material/TextField";
import {Button, Box} from "@mui/material";



export function NewPost() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        width: "100%",
        padding: "2em",
        color: "white",
      }}
    >
        <Avatar sx={{ marginTop: "0.5em" }}>HV</Avatar>
      <Box
        sx={{
          width: "75%",
          marginLeft: "1em",
          color: "white",
        }}
      >
        <TextField
          fullWidth
          multiline
          rows={3}
          placeholder={"Whatcha thinking?!"}
        />
        <Button variant='contained' sx={{ borderRadius: '25px', float: 'right', m: 1, pl: 6, pr: 6 }}>Boo!</Button>
      </Box>
    </Box>
  );
}
