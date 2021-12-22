import React from 'react'
import {
    DataGrid, GridToolbarContainer,
    GridToolbarExport,
    gridClasses,
} from '@mui/x-data-grid';
import { Chip } from '@mui/material';
import {
    randomCreatedDate,
    randomQuantity,
} from '@mui/x-data-grid-generator';
const currencyFormatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
});
const columns = [
    {
        field: 'date',
        headerName: 'Date',
        type: 'date',
        width: 150,
    }, {
        field: 'description',
        headerName: 'Discription',
        width: 500,
        type: 'string'
    }, {
        field: 'ammount',
        headerName: 'Ammount',
        type: 'number',
        width: 150,
        valueFormatter: ({ value }) => currencyFormatter.format(Number(value)),
        cellClassName: 'font-tabular-nums',
    }, {
        field: 'status',
        headerName: 'Status',
        width: 150,
        renderCell: (params) => (
            <Chip variant="outlined" color={params.value.chip} label={params.value.value} />
        ),
    }
];

const rows = [
    {
        id: 1,
        date: randomCreatedDate(),
        description: 'lorem',
        ammount: randomQuantity(),
        status: { value: 'Complete', chip: 'success' },
    },
    {
        id: 2,
        date: randomCreatedDate(),
        description: "lorem ipsumfeuifgwerfyvqerufvyueriqgfyuqerwfgyuergyfugfyugvyqerufgy",
        ammount: randomQuantity(),
        status: { value: 'In Complete', chip: 'warning' },
    },
    {
        id: 3,
        date: randomCreatedDate(),
        description: "lorem ipsumfeuifgwerfyvqerufvyueriqgfyuqerwfgyuergyfugfyugvyqerufgy",
        ammount: randomQuantity(),
        status: { value: 'Rejected', chip: 'error' },
    },
    {
        id: 4,
        date: randomCreatedDate(),
        description: "lorem ipsumfeuifgwerfyvqerufvyueriqgfyuqerwfgyuergyfugfyugvyqerufgy",
        ammount: randomQuantity(),
        status: { value: 'Initiated', chip: 'primary' },
    },
    {
        id: 5,
        date: randomCreatedDate(),
        description: 'lorem',
        ammount: randomQuantity(),
        status: { value: 'Complete', chip: 'success' },
    },
    {
        id: 6,
        date: randomCreatedDate(),
        description: "lorem ipsumfeuifgwerfyvqerufvyueriqgfyuqerwfgyuergyfugfyugvyqerufgy",
        ammount: randomQuantity(),
        status: { value: 'In Complete', chip: 'warning' },
    },
    {
        id: 7,
        date: randomCreatedDate(),
        description: "lorem ipsumfeuifgwerfyvqerufvyueriqgfyuqerwfgyuergyfugfyugvyqerufgy",
        ammount: randomQuantity(),
        status: { value: 'Rejected', chip: 'error' },
    },
    {
        id: 8,
        date: randomCreatedDate(),
        description: "lorem ipsumfeuifgwerfyvqerufvyueriqgfyuqerwfgyuergyfugfyugvyqerufgy",
        ammount: randomQuantity(),
        status: { value: 'Initiated', chip: 'primary' },
    },
    {
        id: 9,
        date: randomCreatedDate(),
        description: 'lorem',
        ammount: randomQuantity(),
        status: { value: 'Complete', chip: 'success' },
    },
    {
        id: 10,
        date: randomCreatedDate(),
        description: "lorem ipsumfeuifgwerfyvqerufvyueriqgfyuqerwfgyuergyfugfyugvyqerufgy",
        ammount: randomQuantity(),
        status: { value: 'In Complete', chip: 'warning' },
    },
    {
        id: 11,
        date: randomCreatedDate(),
        description: "lorem ipsumfeuifgwerfyvqerufvyueriqgfyuqerwfgyuergyfugfyugvyqerufgy",
        ammount: randomQuantity(),
        status: { value: 'Rejected', chip: 'error' },
    },
    {
        id: 12,
        date: randomCreatedDate(),
        description: "lorem ipsumfeuifgwerfyvqerufvyueriqgfyuqerwfgyuergyfugfyugvyqerufgy",
        ammount: randomQuantity(),
        status: { value: 'Initiated', chip: 'primary' },
    },
    {
        id: 13,
        date: randomCreatedDate(),
        description: 'lorem',
        ammount: randomQuantity(),
        status: { value: 'Complete', chip: 'success' },
    },
    {
        id: 14,
        date: randomCreatedDate(),
        description: "lorem ipsumfeuifgwerfyvqerufvyueriqgfyuqerwfgyuergyfugfyugvyqerufgy",
        ammount: randomQuantity(),
        status: { value: 'In Complete', chip: 'warning' },
    },
    {
        id: 16,
        date: randomCreatedDate(),
        description: "lorem ipsumfeuifgwerfyvqerufvyueriqgfyuqerwfgyuergyfugfyugvyqerufgy",
        ammount: randomQuantity(),
        status: { value: 'Rejected', chip: 'error' },
    },
    {
        id: 17,
        date: randomCreatedDate(),
        description: "lorem ipsumfeuifgwerfyvqerufvyueriqgfyuqerwfgyuergyfugfyugvyqerufgy",
        ammount: randomQuantity(),
        status: { value: 'Initiated', chip: 'primary' },
    },
    {
        id: 18,
        date: randomCreatedDate(),
        description: 'lorem',
        ammount: randomQuantity(),
        status: { value: 'Complete', chip: 'success' },
    },
    {
        id: 19,
        date: randomCreatedDate(),
        description: "lorem ipsumfeuifgwerfyvqerufvyueriqgfyuqerwfgyuergyfugfyugvyqerufgy",
        ammount: randomQuantity(),
        status: { value: 'In Complete', chip: 'warning' },
    },
    {
        id: 20,
        date: randomCreatedDate(),
        description: "lorem ipsumfeuifgwerfyvqerufvyueriqgfyuqerwfgyuergyfugfyugvyqerufgy",
        ammount: randomQuantity(),
        status: { value: 'Rejected', chip: 'error' },
    },
    {
        id: 21,
        date: randomCreatedDate(),
        description: "lorem ipsumfeuifgwerfyvqerufvyueriqgfyuqerwfgyuergyfugfyugvyqerufgy",
        ammount: randomQuantity(),
        status: { value: 'Initiated', chip: 'primary' },
    },
];

export default function InvoiceHistory() {
    function CustomToolbar() {
        return (
            <GridToolbarContainer className={gridClasses.toolbarContainer}>
                <GridToolbarExport />
            </GridToolbarContainer>
        );
    }
    return (
        <div style={{ height: 520, width: '100%' }}>
            <DataGrid
                columns={columns}
                rows={rows}
                //loading={rows.length === 0}
                rowHeight={38}
                checkboxSelection
                disableSelectionOnClick
                components={{
                    Toolbar: CustomToolbar,
                }}
            />
        </div>
    );
}
