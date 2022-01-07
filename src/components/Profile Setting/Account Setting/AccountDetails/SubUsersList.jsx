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

export default function SubUsersList() {
    return (
        <DataGrid
            sx={{ height: 400 }}
            rows={rows}
            columns={columns}
            pageSize={5}
            rowsPerPageOptions={[5]}
            checkboxSelection
            disableSelectionOnClick
        />
    );
}