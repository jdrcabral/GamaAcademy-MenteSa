import React from 'react';
import { TextField, Button, Stack } from '@mui/material';

export const Login = () => {

    return (
        <>
            <Stack spacing={2}>
                <TextField required id="email" label="E-mail" placeholder="mail@mail.com" variant='outlined' />
                <TextField required id="password" label="Password" type="password" variant='outlined' />
                <Button variant="contained">Login</Button>
            </Stack>
        </>
    )
}