import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { Paper, Typography, Grid, Divider, Avatar, TextField } from '@mui/material';


import {
    randomCreatedDate,
    randomQuantity,
} from '@mui/x-data-grid-generator';

const columns = [
    { field: 'id', headerName: 'ID', width: 150 },
    {
        field: 'name',
        headerName: 'Name',
        width: 200,
        editable: true,
    },
    {
        field: 'role',
        headerName: 'Role',
        width: 200,
        editable: true,
    },
    {
        field: 'verified',
        headerName: 'Verified',
        type: 'string',
        width: 200,
        editable: true,
    },
    {
        field: 'joined',
        headerName: 'Joined At',
        description: 'This column has a value getter and is not sortable.',
        sortable: true,
        type: 'date',
        width: 200,
    },
];

const rows = [
    {
        id: 1,
        name: "Abbas Ali",
        role: 'Leader',
        verified: 'yes',
        joined: randomCreatedDate(),

    },
    {
        id: 2,
        name: "Abbas Ali",
        role: 'Leader',
        verified: 'yes',
        joined: randomCreatedDate(),
    },
    {
        id: 3,
        name: "Abbas Ali",
        role: 'Leader',
        verified: 'yes',
        joined: randomCreatedDate(),
    },
    {
        id: 4,
        name: "Abbas Ali",
        role: 'Leader',
        verified: 'yes',
        joined: randomCreatedDate(),
    },
    {
        id: 5,
        name: "Abbas Ali",
        role: 'Leader',
        verified: 'yes',
        joined: randomCreatedDate(),
    },
    {
        id: 6,
        name: "Abbas Ali",
        role: 'Leader',
        verified: 'yes',
        joined: randomCreatedDate(),
    },
    {
        id: 7,
        name: "Abbas Ali",
        role: 'Leader',
        verified: 'yes',
        joined: randomCreatedDate(),
    },
    {
        id: 8,
        name: "Abbas Ali",
        role: 'Leader',
        verified: 'yes',
        joined: randomCreatedDate(),
    },
    {
        id: 9,
        name: "Abbas Ali",
        role: 'Leader',
        verified: 'yes',
        joined: randomCreatedDate(),
    },
    {
        id: 10,
        name: "Abbas Ali",
        role: 'Leader',
        verified: 'yes',
        joined: randomCreatedDate(),
    },
];

export default function DataGridDemo() {
    return (
        <Paper elevation={5} sx={{ height: 500, width: 1070, p: 2 }}>
            <Grid conainer spacing={2}>
                <Grid item xs={12} md={12}>
                    <Typography variant="h4" >
                        Account Details
                    </Typography>
                </Grid>
                <Grid item xs={6} md={6} lg={6}>
                    <Avatar
                        alt="Remy Sharp"
                        src="/static/images/avatar/1.jpg"
                        sx={{ width: 150, height: 150 }}
                    />
                </Grid>
                <Grid item xs={6} md={6}>
                    <Typography variant="h6" >
                        Sub Users Details
                    </Typography>

                </Grid>
                <Divider />
                <Grid item xs={12} md={12}>
                    <Typography variant="h6" >
                        Sub Users Details
                    </Typography>
                    <DataGrid
                        sx={{ height: 400 }}
                        rows={rows}
                        columns={columns}
                        pageSize={5}
                        rowsPerPageOptions={[5]}
                        checkboxSelection
                        disableSelectionOnClick
                    />
                </Grid>


            </Grid>
        </Paper>
    );
}