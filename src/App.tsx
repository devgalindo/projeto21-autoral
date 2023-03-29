import {
  BrowserRouter as Router,
  Navigate,
  Route,
  Routes,
} from 'react-router-dom';
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
        <Route path="*" element={<Navigate to={'/'} />} />

        <Route path="/" element={<SigninPage />} />
        <Route path="/signup" element={<SignupPage />} />

        <Route path="/home" element={<FeedPage />} />
        <Route path="/home/posts/:post" element={<PostPage />} />
        <Route path="/home/books/:book" element={<BookPage />} />
        <Route path="/home/communities/:community" element={<CommunityPage />} />

        <Route path="/profiles/me" element={<ProfilePage />} />
        <Route path="/profiles/me/library" element={<ProfilePage />} />
        <Route path="/profiles/:profile" element={<ProfilePage />} />
        <Route path="/profiles/:profile/library" element={<LibraryPage />} />
        
        <Route path="/write" element={<WritePage />} />

        <Route path="/auth/" element={<LoginSigninLayout />}>
        </Route>

        <Route path="/" element={<HomeLayout />}>
        </Route>

      </Routes>
    </Router>
  );
}

export default App;
