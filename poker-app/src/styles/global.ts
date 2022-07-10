import { createGlobalStyle } from "styled-components";
import { SUIT_BLACK_COLOR, SUIT_RED_COLOR } from "../constants";

export default createGlobalStyle`
    * {
        box-sizing:border-box;
        margin: 0;
        padding: 0;
        outline: 0;
        font-size: 16px;
        
        
    }
    :root {
        --normalGray:#e4e4e4;
        --lightGray: #F1F1F1;
        --darkGray: #d0d0d0;
        --darkerGray: #303030;
        --mainBrown: #4D3636;
        --mainBlack: #101010;
        --suitRed: ${SUIT_RED_COLOR};
        --suitBlack: ${SUIT_BLACK_COLOR};
    }

    #root {
        height: 100%;
    }

    .App {
        height: 100%;
    }

    button:hover {
        cursor: pointer;
    }
    body {
        background-color: var(--mainGray);
        min-height: 100%;
        position: absolute;
        max-width: 100vw;
        width: 100%;
        height: 100%;
    }
    main, section {
        background-color: var(--mainBlack);
        color: var(--lightGray)
    }
    ul, li {
        list-style: none;
    }
    a, a:hover, a:focus, a:active {
      text-decoration: none;
      color: inherit;
    }

`;
