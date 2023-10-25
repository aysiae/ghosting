import { Button, ButtonProps } from "@mui/material";
import { styled } from "@mui/material/styles";
import { deepPurple } from "@mui/material/colors";
import { useState } from "react";
import { Authenticator } from "../../components/authenticator/Authenticator";

const LandingPageButton = styled(Button)<ButtonProps>(({ theme }) => ({
  color: theme.palette.getContrastText(deepPurple[300]),
  backgroundColor: "black",
  borderColor: deepPurple[300],
  borderStyle: "solid",
  borderWidth: "2px",
  borderRadius: "25px",
  marginRight: "1em",
  "&:hover": {
    backgroundColor: deepPurple[400],
  },
}));

const ghost = require("../../assets/ghost-2.png");

export function LandingPage() {
  const [useSignIn, setUseSignIn] = useState(false);
  const [useSignUp, setUseSignUp] = useState(false);

  const gettingStarted = (e: any) => {
    if (e.target.textContent === "Sign In") {
      setUseSignIn(true);
      setUseSignUp(false);
    } else {
      setUseSignIn(false);
      setUseSignUp(true);
    }
  };

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
          <LandingPageButton onClick={(e) => gettingStarted(e)}>
            Sign In
          </LandingPageButton>
          <LandingPageButton onClick={(e) => gettingStarted(e)}>
            Sign Up
          </LandingPageButton>
        </div>
        <div>
          {useSignIn && !useSignUp ? <Authenticator signIn={true} /> : null}
          {!useSignIn && useSignUp ? <Authenticator signIn={false} /> : null}
        </div>
      </div>
    </div>
  );
}
