import Avatar from '@mui/material/Avatar'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button'

export function NewPost() {
    return (
        <div style={{
            display: 'flex', 
            flexDirection: 'row', 
            minWidth: '700px', 
            margin: '2em',
            }}>
            <div>
                <Avatar>HV</Avatar>
            </div>
            <div style={{
                width: '75%', 
                marginLeft: '1em'
                }}>
                <TextField 
                    fullWidth
                    multiline 
                    rows={3}
                    placeholder={'Whats happening?!'} 
                    variant='standard'
                />
                <div>
                    <Button>Boo!</Button>
                </div>
            </div>
        </div>
    )
}
