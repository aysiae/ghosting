import {Button, Box, Typography} from "@mui/material"
import Avatar from "@mui/material/Avatar";
import { useAppSelector } from "../../store/store";

import "./Sidebar.scss";
const logo = require("../../assets/ghost-2.png");


export function Sidebar() {
  const user = useAppSelector((state) => state.user.details);

  return (
    <Box
      sx={{
        minWidth: "300px",
        maxWidth: "500px",
        backgroundColor: "#151317",
        height: "100vh",
        color: "white",
      }}
    >
      <Box sx={{    
        display: 'flex',
        flexDirection: 'row',
        ml: 2
        }}>
        <img
          style={{ width: "50px", height: "50px", margin: "1em" }}
          src={logo}
          alt="small purple smiling ghost"
        />
        <Typography variant='h1' sx={{
          fontSize: '48px',
          mt: 2
        }}>Ghostish</Typography>
      </Box>
      <Box sx={{
        display:'flex',
        flexDirection: 'column',
      }}>
        <Button>Home</Button>
        <Button>Explore</Button>
        <Button>Notifications</Button>
        <Button>Messages</Button>
        <Button>Account</Button>
        <Button variant='contained' sx={{borderRadius: '25px', width: '80%', ml:4}}>Boo</Button>
      </Box>
      <Box sx={{
            display: 'flex',
            flexDirection: 'row',
            marginLeft: '2em',
            marginBottom: '2em',
            position: 'fixed',
            bottom: 0,
      }}>
        <Avatar>{user.avatar}</Avatar>
        <Box sx={{
          display: 'flex',
          flexDirection: 'column'
        }}>
          <Typography variant='body1' sx={{
                        marginTop: 0,
                        marginBottom: -0,
                        marginLeft: '1em'
          }}>{user.displayName}</Typography>
          <Typography variant='body1' sx={{
                        marginTop: 0,
                        marginBottom: -0,
                        marginLeft: '1em'
          }}>@{user.userName}</Typography>
        </Box>
      </Box>
    </Box>
  );
}
