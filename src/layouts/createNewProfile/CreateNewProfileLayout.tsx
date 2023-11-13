import { Box } from "@mui/material"
import { CreateProfile } from "../../components/createProfile/CreateProfile"

export function CreateNewProfileLayout() {
    return (
        <Box 
        sx={{
            width: '500px',
            p: 5,
        }}>
            <CreateProfile />
        </Box>
    )
}