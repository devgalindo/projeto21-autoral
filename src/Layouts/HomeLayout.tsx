import { Outlet } from 'react-router-dom';
import { ContainerColumn } from '../components/Containers';
import Footer from '../components/Footer';
import NavBar from '../components/NavBar';

export default function HomeLayout() {
  return (
    <ContainerColumn>
      <NavBar />
      <Outlet />
      <Footer />
    </ContainerColumn>
  );
}
