import { FormControl, TextField, Button, Box, Typography, Checkbox} from "@mui/material";
import { useState } from "react";

import { SignIn } from "../../utils/auth/signIn";
import { SignUp } from "../../utils/auth/signUp";

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
  const [rememberMe, setRememberMe] = useState(false);

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
      <Box
        sx={{
          width: "600px",
          borderRadius: "25px",
          boxShadow: "5px 2px 9px black",
          marginTop: "2em",
          animationName: "react-fade-in",
          animationDuration: "0.75s",
        }}
      >
        <FormControl sx={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'center',
          alignContent: 'center'
        }}>
          <Typography variant='h5' sx={{mt: 4, width:'20%'}}>Get ready to get spooky!</Typography>
          {signIn ? (
            <Box sx={{
              display: 'flex',
              flexDirection: 'column',
              width: '60%',
              m: 4,
            }}>
              <TextField
                required
                variant="standard"
                onBlur={(e) => emailCapture(e)}
                placeholder="Email"
              />
              <TextField
                required
                variant='standard'
                type="password"
                onBlur={(e) => passwordCapture(e)}
                placeholder="Password"
              />
              <Box sx={{display: 'flex', flexDirection: 'row', mt:2}}>
                <Checkbox sx={{width: '10px', height: '10px', marginTop: '0.25em'}} onChange={(e) => setRememberMe(!rememberMe)} /> 
                <Typography sx={{ml: 1}}>Remember me?</Typography>
              </Box>
              <Button
                variant='contained'
                onClick={(e) => launchSignIn()}
                sx={{ marginTop: "2em" }}
                disabled={email && password ? false: true}
              >
                Sign In!
              </Button>
            </Box>
          ) : (
            <Box sx={{
              m: 4,
              display: 'flex',
              flexDirection: 'column',
              width: '60%'
            }}>
              <TextField
                required
                variant="standard"
                onBlur={(e) => emailCapture(e)}
                placeholder="Email"
              />
              <TextField
                required
                variant="standard"
                type='password'
                onBlur={(e) => passwordCapture(e)}
                placeholder="Password"
              />
              <TextField
                required
                variant="standard"
                type='password'
                onBlur={(e) => passwordsMatch(e)}
                placeholder="Retype Password"
              />
              {isMatching ? null : (
                <p style={{ color: "red" }}>Passwords don't match.</p>
              )}
              <Button
                variant='contained'
                onClick={(e) => launchSignUp()}
                sx={{ marginTop: "2em" }}
                disabled={email && password && isMatching ? false: true}
              >
                Sign Up!
              </Button>
            </Box>
          )}
        </FormControl>
      </Box>
    </>
  );
}
