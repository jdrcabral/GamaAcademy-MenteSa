import React from 'react';
import { Box, Tabs, Tab, Typography, TextField, Stack } from '@mui/material';

import { Patient } from './components/Patient';
import { Profissional } from './components/Profissional';

interface TabPanelProps {
    children?: React.ReactNode;
    index: number;
}


export const TabPanel = (props: TabPanelProps) => {
    const { children, index, ...other } = props;

    if (index == 0) {
        return (
            <Patient />
        );
    }
    return (
        <Profissional />
    );
}


export const Register = () => {
    const [value, setValue] = React.useState(0);

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
      setValue(newValue);
    };

    return (
        <>
            <Box>
                <Tabs
                    value={value}
                    onChange={handleChange}
                >
                    <Tab label="Paciente" />
                    <Tab label="Profissional" />
                </Tabs>
                <TabPanel index={value} />
            </Box>
        </>
    )
}