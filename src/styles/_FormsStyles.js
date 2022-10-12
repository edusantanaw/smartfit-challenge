import styled from "styled-components";
import { SectionContainer } from "./GlobalStyles";

const FormContainer = styled(SectionContainer)`
  align-items: center;
  flex-direction: column;
  margin-bottom: 2em;
  .content {
    margin-top: 8em;
    h1 {
      font-size: 2em;
      font-weight: bold;
      text-transform: uppercase;
    }
    hr {
      width: 6.8em;
      background-color: #000;
      height: 1em;
      margin: 1.2em 0 1.2em 0;
    }

    p {
      width: 55em;
      font-size: 1em;
      font-weight: 500;
    }
  }
  form {
    padding: 1em;
    margin-top: 2em;
    width: 54.2em;
    min-height: 20em;
    margin-bottom: 4em;
    box-shadow: 0 1px 5px 2px #d9d9d9;
    border-radius: 4px;
    .top {
      display: flex;
      width: 100%;
      align-items: center;
      img {
        width: 2em;
      }
      span {
        margin-left: 1em;
        color: #666161;
      }
    }
    #periodo {
      color: #666161;
      font-weight: 300;
      margin-top: 1.4em;
      font-size: 1.2em;
      padding-bottom: 0.4em;
      border-bottom: 1px solid #d9d9d9;
      margin-bottom: 0.55em;
    }
  }
  .turno {
    color: #5e5858;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-bottom: 1px solid #d9d9d9;
    padding-bottom: 0.54em;
    margin-bottom: 0.55em;
    input {
      margin-right: 0.6em;
      border-radius: 10px !important;
      cursor: pointer;
    }
    span {
      font-weight: 300;
      font-size: 1em;
    }
  }

  #check {
    width: 100%;
    margin-top: 3em;
    color: #5e5858;
    font-size: 1em;
    font-weight: 300;
    display: flex;
    align-items: center;
    justify-content: space-between;
    input {
      margin-right: 0.6em;
      cursor: pointer;
    }
    #resultado {
      color: #000;
      font-weight: 500;
    }
  }
  .button {
    width: 100%;
    margin-top: 2.5em;
    display: flex;
    gap: 20px;
    justify-content: center;

    button {
      width: 18em;
      font-size: 1.1em;
      padding: 14px;
      background: #fff;
      cursor: pointer;
      border: 1px solid #000;
      transition: 0.1s;
      &:nth-child(1) {
        background: #ff9a02;
        border: none;
      }
      &:hover {
        opacity: 0.9;
        transform: scale(1.01);
      }
    }
  }

  ul {
    width: 54em;
    display: flex;
    flex-wrap: wrap;
    gap: 17.3px;
  }
  @media (max-width: 950px) {
    .content {
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      form {
        width: 40em;

        button{
          width: 13em;
        }
      }
      p{
        width: 40em;
        margin-top: 2em;
      }
      ul{
        width: 40em;
      }
    }
    hr{
      display: none;
    }
    
  }

  @media (max-width:  700px){

    .content{

      p{
        width: 90%;
      }

      ul{
        width: 100%;
        flex-direction: column;
        align-items: center;
      }

      form{
        width: 90%;

        #check{
          flex-direction: column;
          gap: 10px;
        }

        .button{
          flex-direction: column;
          align-items: center;
          button{
            width: 80%;
          }
        }
      }
    }
  
  }
`;

export { FormContainer };
