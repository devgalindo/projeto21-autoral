import { BrowserRouter as Router, Navigate, Route, Routes } from 'react-router-dom';
import { HomeLayout, LoginSigninLayout } from './Layouts';
import {
  BookPage,
  CommunityPage,
  FeedPage,
  LibraryPage,
  PostPage,
  ProfilePage,
  SigninPage,
  SignupPage,
  WritePage,
} from './pages';

function App() {
  return (
    <Router>
      <Routes>

        <Route path='*' element={<Navigate to={'/auth/signin'}/>}/>

        <Route path="/auth/" element={<LoginSigninLayout />}>
          <Route path="signin" element={<SigninPage />} />
          <Route path="signup" element={<SignupPage />} />
        </Route>

        <Route path="/home/" element={<HomeLayout />}>
          <Route path="profiles/:profile" element={<ProfilePage />}>
            <Route path="posts/:post" element={<PostPage />} />
            <Route path="write" element={<WritePage />} />
            <Route path="library" element={<LibraryPage />}>
              <Route path="books/:book" element={<BookPage />} />
            </Route>
          </Route>
        </Route>

        <Route path="/feed/" element={<FeedPage />} >
          <Route path="books/:book" element={<BookPage />} />
          <Route path="communities/:community" element={<CommunityPage />} />
        </Route>

      </Routes>
    </Router>
  );
}

export default App;
