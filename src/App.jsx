import {Routes, Route, useLocation} from "react-router-dom";
import Header from './components/Header';
import Footer from './components/Footer';
import PrivateRoute from './routes/PrivateRoute';
import HomePage from './pages/HomePage'
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';
import MyPage from './pages/MyPage';
import CreatePostPage from './pages/CreatePostPage';
import PostListPage from './pages/PostListPage';
import PostPage from './pages/PostPage';
import GlobalStyle from './styles/GlobalStyle'
import { Wrapper } from './styles/StyledComponents';

function App() {
  const location = useLocation();

  return (
    <>
      <GlobalStyle />
      <Header />
      <Wrapper>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/auth/signup" element={<SignupPage />} />
          <Route path="/auth/login" element={<LoginPage />} />
          <Route path="/posts" element={<PostListPage />} />
          <Route path="/posts/:postId" element={<PostPage />} />
          {/* <Route path="/mypage" element={
            <PrivateRoute path="/mypage" element={<MyPage />} />
          } /> */}
          <Route path="/posts/create" element={
            <PrivateRoute path="/posts/create" element={<CreatePostPage />} />
          } />      
        </Routes>
      </Wrapper>
      <Footer />
    </>
  )
}

export default App;