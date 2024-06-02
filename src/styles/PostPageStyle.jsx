import styled from 'styled-components';

export const Container = styled.div`
    width: 70%;
    display: flex;
    flex-direction: column;
`;

export const PostContainer = styled.div`
  padding: 2rem;
  background-color: var(--gray-light);
  border-radius: 8px;
  box-shadow: 0 4px 3px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex-grow: 1;
`;

export const PostTitle = styled.h1`
  font-size: 2em;
  margin-bottom: 10px;
  color: black;
`;

export const CommentContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 10px;
`;

export const InfoSet = styled.div`
  display: flex;
  margin-bottom: 1rem;
  align-items: center;
  width: 100%;
  flex-direction: row;
`;

export const Field = styled.span`
  font-weight: bold;
  background: var(--gray-medium);
  padding: 0.5rem;
  border-radius: 8px;
  margin-right: 10px;
  color: black;
`;

export const Content = styled.div`
  padding: 0.5rem;
  margin: 1.5rem;
  border-radius: 8px;
  font-size: 1rem;
  border: 1px solid var(--gray-medium);
  text-align: left;
  background: white;
  margin: 1rem 0;
  color: black;
  white-space: pre-wrap;
  width: 95%;
`;

export const PostImages = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  justify-content: center;
  
  img {
    max-width: 100%;
    height: auto;
    display: block;
    border-radius: 8px;
  }
`;

export const CommentContent = styled.div`
  width: calc(100% - 10rem);
  padding: 10px;
  margin-right: 10px;
  border: 1px solid var(--gray-medium);
  border-radius: 4px;
  text-align: left;
`;

export const CommentInput = styled.input`
  width: calc(100% - 10rem);
  padding: 10px;
  margin-right: 10px;
  border: 1px solid var(--gray-medium);
  border-radius: 4px;
`;

export const Title = styled.h1`
  font-size: 1.5rem;
  text-align: center;
  margin-bottom: 20px;
  color: black;
  font-weight: 600;
  width: 100%;
  text-align: center;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  text-align: left;
  width: 70%;
`;

export const Label = styled.label`
  font-size: 1rem;
  margin-bottom: 8px;
  color: black;
`;

export const Input = styled.input`
  padding: 0.5rem;
  font-size: 1rem;
  margin-bottom: 20px;
  border: 1px solid var(--gray-medium);
  border-radius: 6px;
  box-shadow: inset 0 1px 2px rgba(0, 0, 0, 0.1);
  transition: border-color 0.3s;

  &:focus {
    border-color: black;
    outline: none;
  }
`;

export const Textarea = styled.textarea`
  padding: 12px;
  font-size: 1rem;
  margin-bottom: 1.5rem;
  border: 1px solid var(--gray-medium);
  border-radius: 6px;
  box-shadow: inset 0 1px 2px rgba(0, 0, 0, 0.1);
  height: 120px;
  transition: border-color 0.3s;
  text-align: left; 

  &:focus {
    border-color: var(--gray-dark);
    outline: none;
  }
`;

export const FileInput = styled.input`
  margin-bottom: 1.5rem;
  padding: 0 8px;
  color: black;
`;

export const ImagePreview = styled.div`
  margin-bottom: 20px;
  display: flex;
  align-items: center;

  span {
    display: inline-block;
    margin-right: 10px;
    font-size: 14px;
    color: black;
  }

  img {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    object-fit: cover;
  }
`;

export const ButtonGroup = styled.div`
  display: flex;
  gap: 10px;
  margin-top: 20px;
`;
