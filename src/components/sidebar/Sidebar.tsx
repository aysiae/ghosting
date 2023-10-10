import { styled } from '@mui/material/styles';
import Button, { ButtonProps } from '@mui/material/Button';
import { deepPurple } from '@mui/material/colors';

import './Sidebar.scss';
const logo = require('../../assets/ghost.png');


const NavButton = styled(Button)<ButtonProps>(({ theme }) => ({
    color: theme.palette.getContrastText(deepPurple[300]),
    backgroundColor: deepPurple[300],
    borderRadius: 0,
    '&:hover': {
      backgroundColor: deepPurple[400],
    },
  }));

  const PostButton = styled(Button)<ButtonProps>(({ theme }) => ({
    color: theme.palette.getContrastText(deepPurple[300]),
    backgroundColor: deepPurple[300],
    borderRadius: '25px',
    marginTop: '2em',
    marginLeft: '2em',
    width: '80%',
    '&:hover': {
      backgroundColor: deepPurple[400],
    },
  }));

export function Sidebar() {
    return (
        <div className='sidebar-container'>
            <div id='title'>
                <img src={logo} alt='small purple smiling ghost'/>
                <h1>Ghostish</h1>
            </div>
            <div id='nav'>
                <NavButton>Home</NavButton>
                <NavButton>Explore</NavButton>
                <NavButton>Notifications</NavButton>
                <NavButton>Messages</NavButton>
                <NavButton>Switch Profiles</NavButton>
                <NavButton>Account</NavButton>
                <PostButton>Boo</PostButton>
            </div>
            <div id='curr-profile'>

            </div>
        </div>
    )
} 