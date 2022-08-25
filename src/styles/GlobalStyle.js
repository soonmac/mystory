import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyle = createGlobalStyle`
    ${reset};
    body{
        padding: 0;
        margin: 0;
        font-family: 'LeferiPoint-WhiteObliqueA',sans-serif;
        box-sizing: border-box;
        @media screen and (max-width: 500px) {
        font-size: 50%;
      }
    };
    button{
        display: flex;
        cursor: pointer;
        outline: none;
        border-radius: 3px;
    };
    input{
        display: flex;
        outline: none;
        padding-left: 10px;
    }
    p{
        white-space: pre-wrap;
        font-weight: 400;
    }
    ul {
        margin-bottom: 10px;
    }
    h3{
        font-size:20px;
        font-family: 'LeferiBaseType-RegularA';
        font-weight: bold;
    }
    figcaption {
        text-align: center
    }
`;

export default GlobalStyle;
