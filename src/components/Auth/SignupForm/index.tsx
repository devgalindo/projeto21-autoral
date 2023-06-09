import { Box, Button, Container, Link, TextField, Typography } from '@mui/material'
import { sxBox, sxButton, sxContainer, sxTextField } from './styles'
import { useNavigate } from 'react-router-dom'


function SignupForm() {
    
  const navigate = useNavigate()

  return (
    <Container maxWidth={'sm'} sx={sxContainer}>
        <Box component="form" sx={sxBox}>
            <Typography>Signup</Typography>
            <TextField margin='dense' label='Nickname' sx={sxTextField}></TextField>
            <TextField margin='dense' label='Email' sx={sxTextField}></TextField>
            <TextField margin='dense' type={'password'} label='Password' sx={sxTextField}></TextField>
            <TextField margin='dense' type={'password'} label='Repeat your password' sx={sxTextField}></TextField>
            <Button size='large' variant='contained' sx={sxButton}>Cadastre-se</Button>
        <Link onClick={() => navigate('/')} mt={2} sx={{cursor:'pointer'}}>Já possui uma conta? Faça login!</Link>
        </Box>
    </Container>
  )
}

export default SignupForm