import styled from "styled-components";

const Card = styled.div`
  background-color: #d9d9d9;
  width: 32%;
  height: 26em;
  border-radius: 5px;
  padding: 10px;
  overflow: hidden;
  span {
    font-size: 1em;
    color: #0eee17;
    font-weight: bold;
  }
  h2 {
    margin-top: 0.2em;
    font-size: 1.5em;
  }
  p {
    margin-top: 0.3em;
    max-width: 100%;
    margin-bottom: 3em;
    padding-bottom: 1em;
    border-bottom: 1px solid #a79e9e;
  }
  ul {
    width: 100%;
    gap: 5px;
    li {
      list-style: none;
      img {
        height: 60px;
        gap: 0px;
        margin: 0px;
        padding: 0px;
      }
    }
  }
  .week {
    margin-top: 2em;
    display: flex;
    flex-wrap: wrap;
    gap: 1em 2em;

    span {
      color: #000000;
      font-size: 0.9em;
      font-weight: 300;
    }
  }

  @media (max-width: 950px) {
    width: 48%;
    height: auto;
    align-items: center;
    ul {
      width: 100%;
      align-items: center;
      img {
        height: 0.9em;
      }
    }
  }

  @media (max-width: 700px){
    width: 70%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

export { Card };
