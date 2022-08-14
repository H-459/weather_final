import React from "react";

export type ButtonVariants = "default" | "white" | "ghost" | "link";

export interface ButtonProps {
    buttonVariant?: ButtonVariants;
    children?: React.ReactNode;
    disabled?: boolean;
    onClick: () => void;

};

export interface InputProps {
    value: string;
    title: string;
    placeholder: string;
    onChange: (e:React.ChangeEvent<HTMLInputElement>) => void;
    errorMessage?: string;
    inputType?: string;
};

export interface ToggleProps {
    id: string;
    toggleLeft?: React.ReactNode;
    toggleRight?: React.ReactNode;
    switchValue?: boolean;
    onChange?: () => void;
};

