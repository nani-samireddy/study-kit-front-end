import styled from 'styled-components';
const card = styled.div``;

export const TestModesCard = styled(card)`
box-sizing: border-box;
height: auto;
width: 322px;
padding: 40px 20px;
background: ${props => props.bg || "#FFFFFF"};
border: 4px solid #000000;
border-radius: 33px;
font-size: 2rem;
font-weight: 700;
color: #000000;
cursor: pointer;
transition: all 0.3s ease-in-out;
&:hover{
box-shadow: 0px 4px 13px 10px rgba(48, 80, 159, 0.25);

}
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

export const Ftd = styled.td`
  font-size: 1.2rem;
  font-weight: 700;
  color: #000000;
  border-bottom: none;
  `;
export const Dtd = styled.td`
  font-size: 1.2rem;
  font-weight: 700;
  color: #837c7c;  
    border-bottom: none;

 `;
export const Pbutton = styled.div`
margin: 20px 0px;
  padding: 20px 80px;
  background-color: #3e1a31;
  border: 4px solid #000000;
  box-sizing: border-box;
  color: rgb(255, 255, 255);
  font-size: 2rem;
  font-weight: 700;
  cursor: pointer;
  transition: 0.5s ease-in-out;
  border-radius: 5px;
  &:hover{
      filter: drop-shadow(8px 9px 0px rgba(0, 0, 0, 0.25));

  }
 `;



