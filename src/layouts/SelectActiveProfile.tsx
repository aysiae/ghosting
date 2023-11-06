import { Box } from "@mui/material";
import { ProfileCard } from "../components/profileCard/ProfileCard"
import { mockProfileData } from "../mockData/MockProfilesData"
import { useState } from "react"

export function SelectActiveProfile () {
    const [allProfiles, setAllProfiles] = useState(mockProfileData);

    return (
        <Box sx={{
            display: 'flex',
            flexDirection: 'row'
        }}>
            {allProfiles.map(profile => (
                <ProfileCard profile={profile} />
            ))}
        </Box>
        )
    }