import { Outlet } from 'react-router-dom'
import { ContainerColumn } from '../../components/Containers'

function ProfilePage() {
  return (
    <ContainerColumn>
        <Outlet/>
    </ContainerColumn>
  )
}

export default ProfilePage