import { Card, CardContent, Typography} from "@mui/material";
import { BasicProfileType } from "../../types/profileTypes";
const placeholder = require('../../assets/ghost-2.png');

export function ProfileCard({ profile } : { profile: BasicProfileType }) {
  return (
        <Card sx={{
          width: '200px',
          height: '200px',
        }}>
          <CardContent sx={{
            display: 'flex',
            flexDirection: 'column'
          }}>
            <Typography>
              {profile.displayName}
            </Typography>
            <img style={{width: '100px', height: '100px'}} src={profile.avatar ? profile.avatar : placeholder} alt='user uploaded' />
          </CardContent>
        </Card>
  );
}
