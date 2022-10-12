import styled, { createGlobalStyle } from "styled-components";


const GlobalStyle = createGlobalStyle`
   *{ 
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Inter', sans-serif;
   }

   
`;


const SectionContainer = styled.section`
    width: 100%;
    min-height: 90vh;
    display: flex;
    
`
export { GlobalStyle, SectionContainer };
