import React from 'react'
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Container from '@mui/material/Container';

export default function StudentProfileSetting() {
    return (
            <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
            <Grid container spacing={3}>
              <Grid item xs={12} md={8} lg={9}>
                <Paper
                  sx={{
                    p: 2,
                    display: 'flex',
                    flexDirection: 'column',
                    height: 240,
                  }}
                  elevation={5}
                >
                  <h1>This is the Student Profile Setting Page and I am happy with it and ready to go</h1>
            {console.log("this is the Student Profile Page")}
                </Paper>
              </Grid>
              </Grid>
          </Container> 
    )
}

