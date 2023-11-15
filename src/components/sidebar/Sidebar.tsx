import { Button, Box, Typography } from "@mui/material";
import Avatar from "@mui/material/Avatar";
import { useAppSelector } from "../../store/store";
import { Link } from "react-router-dom";
import { navbar } from "../../immutables/navbarData";

const logo = require("../../assets/ghost-2.png");

export function Sidebar() {
  const profile = useAppSelector((state) => state.profile.details);

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
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          ml: 2,
        }}
      >
        <img
          style={{ width: "50px", height: "50px", margin: "1em" }}
          src={logo}
          alt="small purple smiling ghost"
        />
        <Typography
          variant="h1"
          sx={{
            fontSize: "48px",
            mt: 2,
          }}
        >
          Ghostish
        </Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
        }}
      >
        {navbar.map((item) => (
                    <Link style={{width: '100%'}} to={item.route}>
                    <Button sx={{width: '100%'}}>{item.title}</Button>
                    </Link>
        ))}
        <Button
          variant="contained"
          sx={{ borderRadius: "25px", width: "80%", ml: 4 }}
        >
          Boo
        </Button>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          marginLeft: "2em",
          marginBottom: "2em",
          position: "fixed",
          bottom: 0,
        }}
      >
        <Avatar src={profile.avatar}>{profile.displayName}</Avatar>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Typography
            variant="body1"
            sx={{
              marginTop: 0,
              marginBottom: -0,
              marginLeft: "1em",
            }}
          >
            {profile.displayName}
          </Typography>
          <Typography
            variant="body1"
            sx={{
              marginTop: 0,
              marginBottom: -0,
              marginLeft: "1em",
            }}
          >
            @{profile.username}
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}
