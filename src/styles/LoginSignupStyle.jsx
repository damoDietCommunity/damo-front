import styled from 'styled-components';

export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 20px;
  width: 100%;
  max-width: 400px;
`;

export const Title = styled.h1`
  font-size: 2rem;
  margin-bottom: 1.5rem;
`;

export const Label = styled.label`
  display: flex;
  flex-direction: row;
  align-items: center;
  font-size: 1rem;
  width: 100%;
  white-space: nowrap;
`;

export const Input = styled.input`
  padding: 0.5rem;
  margin-left: 1rem;
  border-radius: 8px;
  font-size: 1rem;
  border: 1px solid var(--gray-dark);
  flex-grow: 1;
  flex-shrink: 1; //공간이 부족할 때 줄어들 수 있음
  box-sizing: border-box;
`;

export const InfoSet = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: 2rem;
  width: 100%;
`;
