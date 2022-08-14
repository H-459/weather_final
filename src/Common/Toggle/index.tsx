import * as React from 'react';

import { ToggleProps } from "../types"
import * as S from "./Styles"

const Toggle: React.FC<ToggleProps> =({
    id
}) =>  {
    return(
        <>
        <S.testDiv>fjksdjfklsdjfk;dsjf;klds</S.testDiv>
        <S.Label id = {id}>
            <span>Toggle is a bitch</span>
            <S.Input type="checkbox" />
            <S.Switch> <S.Inner />
            </S.Switch>
        </S.Label>
        </>
    )

}

export default Toggle;