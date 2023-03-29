import { Box, Container } from '@mui/material';
import SigninForm from '../../components/Auth/SigninForm';
import { sxFormContainer, sxLogoContainer, sxOuterBox } from './styles';
import logoImage from '../../assets/MerlimLogo.png';


function SigninPage() {
  return (
    <Box sx={sxOuterBox}>

      <Container sx={sxLogoContainer}>
        <img src={logoImage}/>
      </Container>

      <Container sx={sxFormContainer}>
        <SigninForm/>
      </Container>
      
    </Box>
  );
}

export default SigninPage;
