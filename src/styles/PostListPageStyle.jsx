import styled from 'styled-components';

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 25px;
  justify-items: center;
  justify-content: center;
  
  @media (max-width: 1280px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
  }
`;

export const Post = styled.div`
  width: 100%;
  background: var(--gray-light);
  border: 1px solid var(--gray-medium);
  border-radius: 8px;
  overflow: hidden;
  text-align: center;
  cursor: pointer;
  margin: 10px;

  &:hover {
    box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.2);
  }
`;

export const Image = styled.div`
  height: 200px;
  background: var(--gray-medium);
`;

export const PostTitle = styled.div`
  padding: 0.5rem;
  font-size: 1em;
  font-weight: 800;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  color: black;
`;

export const Nickname = styled.div`
  padding: 0 16px 4px 16px;
  font-size: 0.8em;
  color: black;
`;

export const TopBar = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end; /* Align items to the end (right) */
  margin-bottom: 10px; /* Add some space between the button and the grid */
`;
