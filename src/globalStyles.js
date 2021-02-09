import styled, { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  *{margin: 0;
  padding: 0;
  outline:0;
  box-sizing: border-box;
   font-family:'Source Sans Pro',sans-serif
  }

  body{
    background-color: #070937;
   
}
  
`;

export const Container = styled.div`
position: absolute;
margin:20px 0;
padding: 16px;
top: 50%;
left: 50%;
transform: translate(-50%, -50%);
width: 50%;
background-color: #fafafa;
border-radius: 8px;
text-transform: uppercase;
`;

export const TitleBox = styled.div`
  margin: 25px 0;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  font-size: 1.5rem;
`;

export const Goals = styled.p`
  font-size: 2.2rem;
`;

export const Team = styled.p`
  width: 200px;
`;

export const Button=styled.button`border-radius:4px;
background:#ED3833;
white-space:nowrap;
padding:12px 24px;
color:#fff;
font-size:16px;
border:none;
outline:none;
cursor: pointer;
margin:5px 0;

&::hover{
  transition:all 0.3s ease-out;
  background:#fff;
  color:#ED3833;
}`;

export default GlobalStyle;
