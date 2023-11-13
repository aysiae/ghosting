import { Button, Typography, Box } from "@mui/material";
import { useState } from "react";
import { Authenticator } from "../../components/authenticator/Authenticator";



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
    <Box
      sx={{
        color: "white",
        display: "flex",
        position: "absolute",
        top: "25%",
        left: "25%",
      }}
    >
      <Box>
        <img src={ghost} alt="ghost with blush smiling" />
      <Typography sx={{textAlign: 'center'}} variant="h1">Ghostish</Typography>
      </Box>
      <Box
        sx={{
          marginLeft: "5em",
        }}
      >
        <Typography sx={{m: 1}} variant='h4'>Ready to haunt this place?</Typography>
        <Typography sx={{m: 1}} variant='h5'>Sign in or sign up to post your first Boo!</Typography>
        <Box>
          <Button sx={{m: 1}} variant='outlined' onClick={(e) => gettingStarted(e)}>
            Sign In
          </Button>
          <Button sx={{m: 1}} variant='outlined' onClick={(e) => gettingStarted(e)}>
            Sign Up
          </Button>
        </Box>
        <Box>
          {useSignIn && !useSignUp ? <Authenticator signIn={true} /> : null}
          {!useSignIn && useSignUp ? <Authenticator signIn={false} /> : null}
        </Box>
      </Box>
    </Box>
  );
}
