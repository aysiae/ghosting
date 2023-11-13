import { Box, Autocomplete, FormControl, TextField } from "@mui/material"

export function CreateProfile() {
    const pronouns = ['She', 'Her', 'He', 'Him', 'They', 'Them']

    return (
        <Box>
            <FormControl>
                <TextField></TextField>
                <Autocomplete multiple options={pronouns} renderInput={(params) => <TextField {...params} label="Pronouns" />} />
            </FormControl>
        </Box>
    )
}