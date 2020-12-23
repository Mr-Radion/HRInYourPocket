import styled from 'styled-components';

export const ButtonContainer = styled.button`
background: ${props => 
    props ? '#F6F6F6' : '#FFCD4E'};
box-shadow: ${props => 
    props ? 'none' : '0px 1px 3px rgba(0, 0, 0, 0.3)'};
border-radius: 30px;
border-style: none;
padding: 18px 24px;
color: ${props => 
    props ? '#000' : '#FFFFFF'};
font-style: normal;
font-weight: 500;
font-size: 20px;
line-height: 20px;
letter-spacing: 0.006em;
cursor: pointer;
outline: none;
border: ${props => 
    props ? '2px solid #FFCD4E' : 'none'};
&:hover{
  background: ${ props => 
    props ? '#F6F6F6' : '#FFCD4E'};
  border: ${props => 
    props ? '2px solid #FFCD4E' : 'none'};
      color: ${props => 
    props ? '#FFCD4E' : '#FFFFFF'};
  box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.3);
  outline: none;
}
&:focus {
  outline: none;
  border: ${props => 
    props ? '2px solid #3B3E3C' : 'none'};
    color: ${props => 
    props ? '#3B3E3C' : '#FFFFFF'};
}
&:active {  
  box-shadow: inset 2px 2px 2px rgba(48, 48, 48, 0.2);
}
`;