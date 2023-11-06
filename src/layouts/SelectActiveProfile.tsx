import { Box } from "@mui/material";
import { ProfileCard } from "../components/profileCard/ProfileCard"
import { mockProfileData } from "../mockData/MockProfilesData"
import { BasicProfileType } from "../types/profileTypes";

export function SelectActiveProfile () {
    const allProfiles: BasicProfileType[] = mockProfileData;

    return (
        <Box sx={{
            display: 'flex',
            flexDirection: 'row'
        }}>
            {allProfiles ? allProfiles.map(profile => (
                <ProfileCard profile={profile} />
            )) : null}
            <ProfileCard profile={{displayName: 'Create New Profile'}} />
        </Box>
        )
    }