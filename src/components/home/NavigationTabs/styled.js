import styled from 'styled-components/macro';

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  gap: 40px;
  margin-bottom: 40px;
`;

export const Tab = styled.div(props => ({
  backgroundColor: props.active ? 'red' : 'grey',
  // transform: `{${props.active ? 'scale(1.2)' : 'scale(1)'}`,
  display: 'flex',
  alignItems: 'center',
  color: 'white',
  padding: '15px',
  borderRadius: '50px',
  fontFamily: 'sans-serif',
  cursor: 'pointer',
  userSelect: 'none',
  transition: '80ms',
  '&:hover': {
    transform: 'scale(1.1)',
    transition: '80ms',
  },
  '&:active': {
    transform: 'scale(1.05)',
  },
}));

// export const Tab = styled.div`
//   display: flex;
//   align-items: center;
//   background-color: gray;
//   color: white;
//   padding: 15px;
//   border-radius: 50px;
//   font-family: sans-serif;
//   cursor: pointer;
//   user-select: none;
//   transition: 80ms;
//   &:hover {
//     transform: scale(1.1);
//     transition: 80ms;
//   }
//   &:active {
//     transform: scale(1.05);
//   }
// `;
