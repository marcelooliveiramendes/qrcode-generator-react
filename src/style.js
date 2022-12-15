import styled from "styled-components";
import { createGlobalStyle } from 'styled-components';
 
const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    background: #51abffdd;
    box-sizing: border-box;
    font-family: Open-Sans, Helvetica, Sans-Serif;
    display: flex;
    justify-content: center;
    align-items: center;
    min-width: 100vw;
    min-height: 100vh;
  }
`;

export const Container = styled.div`
    width: 400px;
    height: 100%;
    background-color: #fff;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border-radius: 5px;
    padding: 20px;

    h1{
        color: #3a3a3a;
    }

    .form{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        width: 100%;

        input{
            width: 100%;
            height: 45px;
            border: 1px solid #555555;
            border-radius: 5px;
            font-size: 15px;
            outline: none;
            text-align: center;
        }
        button{
            width: 100%;
            height: 45px;
            border-radius: 5px;
            border: 3px solid #51abffdd;
            color: #51abffdd;
            background-color: transparent;
            font-weight: 600;
            font-size: 15px;
            margin-top: 10px;
            transition: background .4s ease;


            &:hover{
                border: 3px solid #51abffdd;
                color: #ffffffdd;
                background-color: #51abffdd;
            }

        }
    }
`
 
export default GlobalStyle;