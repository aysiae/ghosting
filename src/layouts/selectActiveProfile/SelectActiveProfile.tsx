import { Box, Button, Popover } from "@mui/material";
import { ProfileCard } from "../../components/profileCard/ProfileCard";
import { mockProfileData } from "../../mockData/MockProfilesData";
import { BasicProfileType } from "../../types/profileTypes";
import { CreateNewProfileLayout } from "../createNewProfile/CreateNewProfileLayout";
import { useState } from "react";

export function SelectActiveProfile() {
  const allProfiles: BasicProfileType[] = mockProfileData;
  const [popoverEl, setPopoverEl] = useState<HTMLButtonElement | null>(null);

  const handlePopover = (e: React.MouseEvent<HTMLButtonElement>) => {
    setPopoverEl(e.currentTarget);
  };

  const open = Boolean(popoverEl);
  const id = open ? "simple-popover" : undefined;

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
      }}
    >
      {allProfiles
        ? allProfiles.map((profile) => (
            <Button>
              <ProfileCard profile={profile} />
            </Button>
          ))
        : null}
      <Button onClick={(e) => handlePopover(e)}>
        <ProfileCard profile={{ displayName: "Create New Profile" }} />
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
          vertical: 350,
          horizontal: 475,
        }}
        onClose={(e) => setPopoverEl(null)}
      >
        <CreateNewProfileLayout />
      </Popover>
    </Box>
  );
}
