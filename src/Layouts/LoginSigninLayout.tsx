import { Outlet } from 'react-router-dom';
import styled from 'styled-components';
import { mainColor, paleColor } from '../constants/colors';
import logoImage from '../assets/MerlimLogo.png';

export default function LoginSigninLayout() {
  return (
    <ContainerLayout>
      <div className="logoImageBox">
        <img src={logoImage} alt="logo Merlim" />
      </div>
      <div className="sideAuthBox">
        <Outlet />
      </div>
    </ContainerLayout>
  );
}

const ContainerLayout = styled.div`
  display: flex;
  width: 100vw;
  height: 100vh;
  .logoImageBox {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 50vw;
      height: 100vh;
      background-color: white;
  }
  .sideAuthBox {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 50vw;
    height: 100vh;
    background-color: ${mainColor};
  }
`;
