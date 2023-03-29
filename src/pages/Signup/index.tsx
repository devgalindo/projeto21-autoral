import { Box, Container } from '@mui/material';
import { sxFormContainer, sxLogoContainer, sxOuterBox } from './styles';
import logoImage from '../../assets/MerlimLogo.png';
import SignupForm from '../../components/Auth/SignupForm';


function SignupPage() {
  return (
    <Box sx={sxOuterBox}>

      <Container sx={sxLogoContainer}>
        <img src={logoImage}/>
      </Container>

      <Container sx={sxFormContainer}>
        <SignupForm/>
      </Container>
      
    </Box>
  );
}

export default SignupPage;