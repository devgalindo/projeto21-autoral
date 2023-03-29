import { Container } from '@mui/material'
import React from 'react'
import { ContainerColumn } from '../../components/Containers'
import NavBar from '../../components/NavBar'
import { PostPage } from '../index'
function FeedPage() {
  return (
    <ContainerColumn>
      <NavBar/>
      <Container maxWidth={'lg'} sx={{bgcolor: 'azure', height:'100vh'}}> 
      <PostPage/>
      </Container>
    </ContainerColumn>
  )
}

export default FeedPage