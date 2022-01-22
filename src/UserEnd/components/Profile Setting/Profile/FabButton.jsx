import React from 'react'

import { Avatar, Paper, IconButton } from "@mui/material";
import AddIcon from '@mui/icons-material/Add';

export default function FabButton(props) {
    return (
        <Paper elevation={10} sx={{ borderRadius: 10 }}>
            <Avatar sx={{ backgroundColor: 'purple' }}>
                <IconButton size='small' onClick={props.popUpFunction} >
                    <AddIcon fontSize="small" sx={{ color: 'white' }} />
                </IconButton>
            </Avatar>
        </Paper>
    )
}
