import React from "react";


export interface ToggleProps {
    id: string;
    rightSide?: React.ReactNode;
    leftSide?: React.ReactNode;
    switchValue?: boolean;
    onChange?: () => void;
};