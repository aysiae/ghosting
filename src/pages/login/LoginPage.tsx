import { Button, ButtonProps } from "@mui/material";
import { styled } from "@mui/material/styles";
import { deepPurple } from "@mui/material/colors";

const LoginPageButton = styled(Button)<ButtonProps>(({ theme }) => ({
  color: theme.palette.getContrastText(deepPurple[300]),
  backgroundColor: "black",
  borderColor: deepPurple[300],
  borderStyle: "solid",
  borderWidth: "2px",
  borderRadius: "25px",
  "&:hover": {
    backgroundColor: deepPurple[400],
  },
}));

const ghost = require("../../assets/ghost-2.png");

export function LoginPage() {
  return (
    <div
      style={{
        color: "white",
        display: "flex",
        position: "absolute",
        top: "25%",
        left: "25%",
      }}
    >
      <div>
        <img src={ghost} alt="ghost with blush smiling" />
        <h1
          style={{
            textAlign: "center",
          }}
        >
          Ghostish
        </h1>
      </div>
      <div
        style={{
          marginLeft: "5em",
        }}
      >
        <h2>Ready to haunt this place?</h2>
        <h3>Sign in or sign up to post your first Boo!</h3>
        <div>
          <LoginPageButton
            sx={{
              marginRight: "1em",
            }}
          >
            Sign In
          </LoginPageButton>
          <LoginPageButton>Sign Up</LoginPageButton>
        </div>
      </div>
    </div>
  );
}
