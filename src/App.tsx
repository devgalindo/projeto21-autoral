import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import HomeLayout from './Layouts/HomeLayout'
import LoginSigninLayout from './Layouts/LoginSigninLayout'
import ProfilePage from './pages/Profile'

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<LoginSigninLayout/>}>
          <Route path='auth/'/>
            <Route path='sigin'/>
            <Route path='sigup'/>
          <Route/>

          <Route path='home/' element={<HomeLayout/>}>
            <Route path='profiles/:profile' element={<ProfilePage/>}>
              <Route path='posts/:post'/>
              <Route path='write'></Route>
              <Route path='library'>
                <Route path='books/:book'></Route>
              </Route>
            <Route/>

            <Route path='feed/'>
              <Route path='books/:book'/>
              <Route path='communities/:community'/>
            </Route>

            </Route>
          </Route>

        </Route>
      </Routes>
    </Router>
  )
}

export default App
