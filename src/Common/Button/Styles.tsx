import styled from "styled-components";

import { ButtonProps } from "../types";

const whiteButton = () => {
    return `
        box-shadow: inset -6px 4px 4px 0 rgba(255, 255, 255, 0.1), inset 2px -3px 6px 0 rgba(0, 0, 0, 0.1);
        background-color: #fff;
        color: #444e72;
    }
      `;
  };
  
  const defaultButton = () => {
    return `
        box-shadow: -4px 8px 50px 4px rgba(0, 0, 0, 0.16),
        inset -6px 4px 4px 0 rgba(255, 255, 255, 0.1),
        inset 2px -3px 6px 0 rgba(0, 0, 0, 0.1);
        background-image: linear-gradient(to left, #47bfdf, #4a91ff);
        `;
  };
  
  const linkButton = () => {
    return `
      color: #222;
      text-decoration: underline;
      font-weight: normal;
      `;
  };
  
  const ghostButton = () => {
    return `
      border: solid 1px #fff;
      color: #fff;
    }
      `;
  };
  
  export const buttonText = styled.span``;
  
  export const ButtonWrapper = styled.button<ButtonProps>`
    background: none;
    color: inherit;
    border: none;
    font: inherit;
    cursor: pointer;
    outline: inherit;
    padding: 16px 54px;
  
    border-radius: 10px;
    font-weight: bold;
    line-height: 1.2;
  
    ${(props) => {
      switch (props.buttonVariant) {
        case "white":
          return whiteButton();
        case "ghost":
          return ghostButton();
        case "link":
          return linkButton();
        case "default":
        default:
          return defaultButton();
      }
    }}
    &:disabled ${buttonText} {
      opacity: 0.4;
      color:pink;
    }
  `;
