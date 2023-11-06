import { FormControl, TextField, Button, ButtonProps } from "@mui/material";
import { styled } from "@mui/material/styles";
import { deepPurple } from "@mui/material/colors";
import { useState } from "react";

import { SignIn } from "../../utils/auth/signIn";
import { SignUp } from "../../utils/auth/signUp";

const SignInButton = styled(Button)<ButtonProps>(({ theme }) => ({
  color: theme.palette.getContrastText(deepPurple[300]),
  backgroundColor: deepPurple[300],
  width: "50%",
  borderStyle: "solid",
  "&:hover": {
    backgroundColor: deepPurple[400],
  },
}));

const SignInField = styled(TextField)({
  width: "400px",
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

const inEffect = `
  @keyframes react-fade-in {
    0%   { opacity: 0; }
    50%  { opacity: 0; }
    100% { opacity: 1; }
  }
`;

export function Authenticator({ signIn }: { signIn: boolean }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isMatching, setIsMatching] = useState(true);

  const emailCapture = (e: any) => {
    setEmail(e.target.value);
  };

  const passwordCapture = (e: any) => {
    setPassword(e.target.value);
  };

  const passwordsMatch = (e: any) => {
    if (password === e.target.value) {
      setIsMatching(true);
    } else {
      setIsMatching(false);
    }
  };

  const launchSignIn = () => {
    SignIn(email, password);
  };

  const launchSignUp = () => {
    SignUp(email, password);
  };

  return (
    <>
      <style children={inEffect} />
      <div
        style={{
          width: "600px",
          height: "400px",
          borderRadius: "25px",
          boxShadow: "5px 2px 9px #9575cd",
          marginTop: "2em",
          animationName: "react-fade-in",
          animationDuration: "0.75s",
        }}
      >
        <FormControl
          sx={
            signIn
              ? { marginTop: "6em", marginLeft: "6em" }
              : { marginTop: "3em", marginLeft: "6em" }
          }
        >
          {signIn ? (
            <>
              <SignInField
                onBlur={(e) => emailCapture(e)}
                placeholder="email"
              />
              <SignInField
                onBlur={(e) => passwordCapture(e)}
                placeholder="password"
              />
              <SignInButton
                onClick={(e) => launchSignIn()}
                sx={{ marginTop: "2em" }}
              >
                Sign In
              </SignInButton>
            </>
          ) : (
            <>
              <SignInField
                onBlur={(e) => emailCapture(e)}
                placeholder="email"
              />
              <SignInField
                onBlur={(e) => passwordCapture(e)}
                placeholder="password"
              />
              <SignInField
                onBlur={(e) => passwordsMatch(e)}
                placeholder="retype password"
              />
              {isMatching ? null : (
                <p style={{ color: "red" }}>Passwords don't match.</p>
              )}
              <SignInButton
                onClick={(e) => launchSignUp()}
                sx={{ marginTop: "2em" }}
              >
                Sign Up!
              </SignInButton>
            </>
          )}
        </FormControl>
      </div>
    </>
  );
}
