import * as React from 'react';
import { ButtonProps } from "../types"
import * as S from "./Styles"

const Button : React.FC<ButtonProps> = ({
    buttonVariant,
    children,
    disabled,
    onClick
}) => {
    return(
        <>
        <S.ButtonWrapper
         onClick={() => onClick()}
         disabled = {disabled}
         buttonVariant = {buttonVariant}
         >
            <S.buttonText>{children}</S.buttonText>
        </S.ButtonWrapper>
        </>
    ) 

}

export default Button;