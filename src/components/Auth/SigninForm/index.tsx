import React from 'react'
import { Box, Button, Container, Link, TextField, Typography } from '@mui/material';
import { sxBox, sxButton, sxContainer, sxTextField } from './styles';

import { useNavigate } from 'react-router-dom';


function SigninForm() {
  const navigate = useNavigate()

  return (
    <Container maxWidth={'sm'} sx={sxContainer}>
      <Box component="form" sx={sxBox}>
        <Typography>Faça Login</Typography>
        <TextField margin='dense' type={'password'} label='Email' sx={sxTextField}></TextField>
        <TextField margin='dense' type={'password'} label='Password' sx={sxTextField}></TextField>
        <Button size='large' variant='contained' sx={sxButton}>Faça Login</Button>
        <Link onClick={() => navigate('/signup')} mt={2} sx={{cursor:'pointer'}}>Ainda não tem uma conta? Cadastre-se</Link>
      </Box>
    </Container>
  )
}

export default SigninForm