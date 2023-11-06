import { styled } from "@mui/material/styles";
import Button, { ButtonProps } from "@mui/material/Button";
import { deepPurple } from "@mui/material/colors";
import Avatar from "@mui/material/Avatar";
import { useAppSelector } from "../../store/store";

import "./Sidebar.scss";
const logo = require("../../assets/ghost-2.png");

const NavButton = styled(Button)<ButtonProps>(({ theme }) => ({
  color: theme.palette.getContrastText(deepPurple[300]),
  backgroundColor: '#151317',
  borderRadius: 0,
  "&:hover": {
    backgroundColor: deepPurple[300],
  },
}));

const PostButton = styled(Button)<ButtonProps>(({ theme }) => ({
  color: theme.palette.getContrastText(deepPurple[300]),
  backgroundColor: deepPurple[300],
  borderRadius: "25px",
  marginTop: "2em",
  marginLeft: "2em",
  width: "80%",
  "&:hover": {
    backgroundColor: deepPurple[400],
  },
}));

export function Sidebar() {
  const user = useAppSelector((state) => state.user.details);

  return (
    <div className="sidebar-container">
      <div id="title">
        <img 
        style={{width: '50px', height: '50px', margin: '1em'}}
        src={logo} alt="small purple smiling ghost" />
        <h1>Ghostish</h1>
      </div>
      <div id="nav">
        <NavButton>Home</NavButton>
        <NavButton>Explore</NavButton>
        <NavButton>Notifications</NavButton>
        <NavButton>Messages</NavButton>
        <NavButton>Account</NavButton>
        <PostButton>Boo</PostButton>
      </div>
      <div id="curr-profile">
        <Avatar>{user.avatar}</Avatar>
        <div id="profile-sidebar">
          <p>{user.displayName}</p>
          <p>@{user.userName}</p>
        </div>
      </div>
    </div>
  );
}
