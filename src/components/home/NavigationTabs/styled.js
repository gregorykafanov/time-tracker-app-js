import styled from 'styled-components/macro';

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  gap: 40px;
`;

export const Tab = styled.div`
  display: flex;
  align-items: center;
  background-color: gray;
  color: white;
  padding: 15px;
  border-radius: 50px;
  font-family: sans-serif;
  cursor: pointer;
  user-select: none;
  transition: 80ms;
  &:hover {
    transform: scale(1.1);
    transition: 80ms;
  }
  &:active {
    transform: scale(1.05);
  }
`;
