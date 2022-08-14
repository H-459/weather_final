import styled from "styled-components";
import Moon  from "./Icons/moon-dark.svg";

import {ReactComponent as Sun}  from "./Icons/sun-dark.svg";


export const Label = styled.label`
  display: flex;
  align-items: center;
  gap: 10px;
  cursor: pointer;`;


  export const testDiv = styled.div`
  background-image: url({Moon});
  background-size: 28px 28px;`;
  

export const Switch = styled.div`
  width: 60px;
  height: 32px;
  background: #b3b3b3;
  border-radius: 32px;
  position: relative;
  padding: 4px;
  transition: 300ms all;
  &:before {
    content: "";
    position: absolute;
    width: 28px;
    height: 28px;
    border-radius: 35px;
    top: 50%;
    left: 4px; 
    background: white;
    transform: translate(0, -50%);
    transition: 300ms all;
  }`

  export const Input = styled.input`
  opacity: 0;
  position: absolute;
  display: none;

  &:checked + ${Switch} {
    background: green;
    &:before {
      transform: translate(32px, -50%);
    }
  }`

  export const Inner = styled.span`
  &:before {
    content: {Moon};
  }
  &:after {
    content: {Sun};
  }`


  