import styled from 'styled-components';

export const TestModesCard = styled.div`
box-sizing: border-box;
height: auto;
width: 322px;
padding: 40px 20px;
background: ${props => props.bg || "#FFFFFF"};
border: 4px solid #000000;
box-shadow: 0px 4px 13px 6px rgba(48, 80, 159, 0.25);
border-radius: 33px;
font-size: 2rem;
font-weight: 700;
cursor: pointer;
`;


export const ChipContainer = styled.div`
 display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
  align-content: flex-start;
  padding: 15px 15px;
  background-color: #d8cfe8;
  margin: 20px;
  border-radius: 59px;
  cursor: pointer;
  opacity: ${props => props.isSelected ? 1 : 0.5};
`;