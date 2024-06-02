import styled from 'styled-components';

export const HeaderSection = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.5rem 2rem;

  @media (max-width: 576px) {
    padding: 1rem;
  }
`;

export const LogoSection = styled.section`
  display: flex;
  align-items: center;
  gap: 1rem;
  color: black;
`;

export const LogoText = styled.div`
  font-weight: 800;
  font-size: 2.5rem;

  @media (max-width: 576px) {
    font-size: 2rem;
  }
`;

export const HeaderMenu = styled.div`
  display: flex;
  gap: 2rem;
  font-weight: 700;
  font-size: 1.25rem;
  margin-left: auto;

  @media (max-width: 992px) {
    width: 100%;
    justify-content: flex-end;
    flex-wrap: wrap;
  }

  @media (max-width: 576px) {
    gap: 1rem;
    font-size: 1rem;
    justify-content: center;
    margin-left: 0;
  }
`;