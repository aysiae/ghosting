import { Box, Button, Popover } from "@mui/material";
import { ProfileCard } from "../../components/profileCard/ProfileCard";
import { mockProfileData } from "../../mockData/MockProfilesData";
import { BasicProfileType } from "../../types/profileTypes";
import { CreateNewProfileLayout } from "../createNewProfile/CreateNewProfileLayout";
import { useState } from "react";
import { Navigate } from "react-router-dom";

export function SelectActiveProfile() {
  const allProfiles: BasicProfileType[] = mockProfileData;
  const [popoverEl, setPopoverEl] = useState<HTMLButtonElement | null>(null);
  const [submitted, setSubmitted] = useState(false)

  const handlePopover = (e: React.MouseEvent<HTMLButtonElement>) => {
    setPopoverEl(e.currentTarget);
  };

  const open = Boolean(popoverEl);
  const id = open ? "simple-popover" : undefined;

  return (
    <>
    {submitted ? <Navigate to='/timeline' /> :
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
      }}
    >
      {allProfiles
        ? allProfiles.map((profile) => (
            <Button onClick={(e) => setSubmitted(true)}>
              <ProfileCard profile={profile} />
            </Button>
          ))
        : null}
      <Button onClick={(e) => handlePopover(e)}>
        <ProfileCard profile={{ displayName: "Create New Profile", username: '' }} />
      </Button>
      <Popover
        id={id}
        open={open}
        anchorEl={popoverEl}
        anchorOrigin={{
          vertical: "top",
          horizontal: "center",
        }}
        transformOrigin={{
          vertical: 375,
          horizontal: 325,
        }}
        onClose={(e) => setPopoverEl(null)}
      >
        <CreateNewProfileLayout />
      </Popover>
    </Box>
}
    </>
  );
}
