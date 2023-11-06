import { Avatar, Card, CardContent, Typography} from "@mui/material";
import { BasicProfileType } from "../../types/profileTypes";
const placeholder = require('../../assets/ghost-2.png');

export function ProfileCard({ profile } : { profile: BasicProfileType }) {
  return (
        <Card sx={{
          width: '200px',
          height: '200px',
          backgroundColor: '#422E50',
          margin: '2em',
        }}>
          <CardContent sx={{
            color: 'white',
            display: 'flex',
            flexDirection: 'column',
          }}>
            <Typography sx={{
              textAlign: 'center',
            }}>
              {profile.displayName}
            </Typography>
            <Avatar sx={{
              bgcolor: 'black',
              width: '125px',
              height: '125px',
              marginLeft: '1em',
              marginTop: '0.5em',
            }}
            src={profile.avatar ? profile.avatar : placeholder}
            />
          </CardContent>
        </Card>
  );
}
