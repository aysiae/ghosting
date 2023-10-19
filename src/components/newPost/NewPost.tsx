import Avatar from "@mui/material/Avatar";
import TextField from "@mui/material/TextField";
import { styled } from "@mui/material/styles";
import Button, { ButtonProps } from "@mui/material/Button";
import { deepPurple } from "@mui/material/colors";

const PostButton = styled(Button)<ButtonProps>(({ theme }) => ({
  color: theme.palette.getContrastText(deepPurple[300]),
  backgroundColor: deepPurple[300],
  borderRadius: "25px",
  marginTop: "2em",
  marginLeft: "2em",
  width: "30%",
  "&:hover": {
    backgroundColor: deepPurple[400],
  },
}));

const NewPostTextField = styled(TextField)({
  "& .MuiInputBase-input": {
    color: "white",
  },
  "& label.Mui-focused": {
    color: deepPurple[400],
  },
  "& .MuiInput-underline:after": {
    borderBottomColor: deepPurple[400],
  },
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      borderRight: 0,
      borderLeft: 0,
      borderTop: 0,
      borderColor: deepPurple[400],
    },
    "&:hover fieldset": {
      borderColor: deepPurple[400],
      color: "white",
    },
    "&.Mui-focused fieldset": {
      borderColor: deepPurple[400],
      color: "white",
    },
  },
});

export function NewPost() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        width: "700px",
        padding: "2em",
        color: "white",
        borderBottom: "1px grey solid",
      }}
    >
      <div>
        <Avatar sx={{ marginTop: "0.5em" }}>HV</Avatar>
      </div>
      <div
        style={{
          width: "75%",
          marginLeft: "1em",
          color: "white",
        }}
      >
        <NewPostTextField
          fullWidth
          multiline
          rows={3}
          placeholder={"Whatcha thinking?!"}
        />
        <PostButton sx={{ marginLeft: "25em" }}>Boo!</PostButton>
      </div>
    </div>
  );
}
