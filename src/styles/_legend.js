import styled from "styled-components";

const LegendaContainer = styled.div`
  display: flex;
  width: 54.2em;
  align-items: center;
  justify-content: space-evenly;
  height: 12em;
  background-color: #d9d9d9;
  margin-bottom: 4em;
  border-radius: 4px;
  box-shadow: 0 0 3px  #d9d9d0;
  h1 {
    text-align: center;
    margin-bottom: 1em;
    font-size: 1em !important;
  }
  .legenda_img {
    display: flex;
    gap: 0.5em;
    align-items: center;
    div{
        text-align: center;
    }
  }
  img {
    display: block;
    height: 70px;
  }
  span{
    font-size: 0.9em;
    font-weight: 500;
  }
  @media (max-width: 950px) {
    width: 40em;
    span{
      font-size: 0.7em;
    }
    img{
      height: 3em;
    }

  }
  @media (max-width:  700px){
    width: 70%;
    height:40em;
    flex-direction: column;
    img{
      height: 5em;
    }
    span{
      font-size: 1em;
    }
    .legenda_img {
      gap: 2em;
    }
  }
`;

export { LegendaContainer };
