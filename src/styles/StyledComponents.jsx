import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';

const baseButtonStyles = css`
  padding: 0.5rem 1rem;
  border-radius: 8px;
  cursor: pointer;
  text-decoration: none;
  margin: 5px;
  transition: background-color 0.3s ease, color 0.3s ease;

  &:hover {
    background-color: var(--gray-dark);
    color: black;
  }
`;

const linkStyles = css`
  color: black;

  &:hover {
    background-color: var(--gray-light);
  }
`;

const buttonStyles = css`
  color: white;
  background-color: black;
  border: none;
`;

export const StyledLink = styled(Link)`
  ${baseButtonStyles}
  ${linkStyles}
`;

export const LinkButton = styled(Link)`
  ${baseButtonStyles}
  ${buttonStyles}
`;

export const Button = styled.button`
  ${baseButtonStyles}
  ${buttonStyles}
`;

export const Wrapper = styled.div`
    margin: 0 20%;
    align-items: center;
    display: flex;
    justify-content: center;
    flex-grow: 1;
`;

export const StyledHr = styled.hr`
  border: none;
  border-top: 2px solid var(--gray-medium);
  margin: 20px 0;
  width: 100%;
`;