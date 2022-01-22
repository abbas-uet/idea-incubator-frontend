import React from 'react'
import { Container, Typography } from '@mui/material'

export default function StepTwo() {
    return (
        <Container sx={{ textAlign: 'center' }}>
            <Typography variant="h3" gutterBottom color='error' component="div">
                Alert!
            </Typography>
            <Typography variant="h6" gutterBottom color='gray' component="div">
                A final Step Before you go Forward
            </Typography>
            <Typography variant="h6" gutterBottom color='gray' component="div">
                body2. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
                blanditiis tenetur unde suscipit, quam beatae rerum inventore consectetur,
                neque doloribus, cupiditate numquam dignissimos laborum fugiat deleniti? Eum
                quasi quidem quibusdam.
            </Typography>
        </Container >
    )
}
