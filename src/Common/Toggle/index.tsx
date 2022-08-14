import * as React from 'react';

import { ToggleProps } from "../types"
import * as S from "./Styles"

const Toggle: React.FC<ToggleProps> =({
    id,
    rightSide,
    leftSide
}) =>  {
    return(
        <>
        <S.Label id = {id}>
            <span>Toggle</span>
            <S.Input type="checkbox" />
            <S.Switch> 
                <S.leftIcon>{leftSide}</S.leftIcon> <S.rightIcon>{rightSide}</S.rightIcon>
            </S.Switch>
        </S.Label>
        </>
    )

}

export default Toggle;