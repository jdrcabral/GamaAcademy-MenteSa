import React from 'react';
import { Container, Grid, Paper, } from '@mui/material';

import { Login } from './components/Login';

export const Auth = () => {
    return (
        <Container>
            <Grid container>
                <Paper elevation={3} >
                    <Grid item xs={12}>
                        <Login />
                    </Grid>
                </Paper>
            </Grid>
        </Container>
    );
}
