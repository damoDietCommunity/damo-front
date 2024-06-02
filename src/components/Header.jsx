import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../redux/authSlice";
import { StyledLink } from "../styles/StyledComponents";
import { HeaderSection, LogoSection, LogoText, HeaderMenu } from "../styles/HeaderStyle";

function Header() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

  const handleLogout = () => {
    dispatch(logout());
    navigate("/");
  };

  return (
    <HeaderSection>
      <LogoSection>
        <StyledLink to="/">
          <LogoText>DAMO</LogoText>
        </StyledLink>
      </LogoSection>
      <HeaderMenu>
        <StyledLink to="/posts">게시판</StyledLink>
        {isAuthenticated ? (
          <>
            {/* <StyledLink to="/mypage">마이페이지</StyledLink> */}
            <StyledLink to="#" onClick={handleLogout}>로그아웃</StyledLink>
          </>
        ) : (
          <>
            <StyledLink to="/auth/login">로그인</StyledLink>
            <StyledLink to="/auth/signup">회원가입</StyledLink>
          </>
        )}
      </HeaderMenu>
    </HeaderSection>
  );
}

export default Header;
