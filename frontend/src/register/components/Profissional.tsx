import React from 'react';
import { Box, Tabs, Tab, Typography, TextField, Stack, MenuItem } from '@mui/material';

const genderList = [
  {
    value: null,
    label: '',
  },
  {
    value: 0,
    label: 'Masculino',
  },
  {
    value: 1,
    label: 'Feminino',
  },
  {
    value: 2,
    label: 'Não Binário',
  },
  {
    value: 3,
    label: 'Outro',
  },
];

export const Profissional = () => {

    const [gender, setGender] = React.useState('');

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      setGender(event.target.value);
    };

    return (
      <>
        <Stack spacing={2}>
            <Typography>Cadastro de Profissional</Typography>
            <TextField required id="name" label="Nome" placeholder="Fulano de Tal" variant='outlined' />
            <TextField required id="email" label="Email" placeholder="mail@mail.com" variant='outlined' />
            <TextField
              id="gender"
              select
              label="Genêro"
              value={gender}
              onChange={handleChange}
            >
              {genderList.map((option) => (
                <MenuItem>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>
            <TextField required id="cpf" label="CPF" variant='outlined' />
            <TextField required id="birthDate" label="Data Nascimento" variant='outlined' />
            <TextField required id="identification" label="CRM/CRP" variant='outlined' />
            <TextField required id="password" label="Senha" type="password" variant='outlined' />
            <TextField required id="passwordConfirm" label="Confirme sua senha" type="password" variant='outlined' />
        </Stack>
      </>  
    );
}
