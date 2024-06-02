import styled from 'styled-components';

export const UserSection = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 2rem;
  background-color: var(--gray-light);
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  margin-bottom: 2rem;
`;

export const ProfileImage = styled.img`
  width: 150px;
  height: 150px;
  border-radius: 50%;
  object-fit: cover;
  margin-bottom: 1rem;
`;

export const UserName = styled.h2`
  font-size: 1.5rem;
  font-weight: bold;
  color: black;
  margin-bottom: 1rem;
`;

export const HeaderSection = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.5rem 2rem;
  color: white;

  @media (max-width: 576px) {
    padding: 1rem;
  }
`;

export const LogoSection = styled.section`
  display: flex;
  align-items: center;
  gap: var(--gap-medium);
  color: black;
  line-height: 1.5;
`;

export const LogoText = styled.div`
  font-weight: 800;
  font-size: 2.5rem;
  color: black;

  @media (max-width: 576px) {
    font-size: 2rem;
  }
`;

export const HeaderMenu = styled.div`
  display: flex;
  gap: var(--gap-large);
  font-weight: 700;
  font-size: 1.25rem;
  margin-left: auto;
  color: black;

  @media (max-width: 992px) {
    width: 100%;
    justify-content: flex-end;
    flex-wrap: wrap;
  }

  @media (max-width: 576px) {
    gap: var(--gap-small);
    font-size: 1rem;
    justify-content: center;
    margin-left: 0;
  }
`;