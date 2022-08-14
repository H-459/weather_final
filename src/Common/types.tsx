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
    rightSide?: React.ReactNode;
    leftSide?: React.ReactNode;
    switchValue?: boolean;
    onChange?: () => void;
};

export type InputTypes = "text" | "password";

export interface InputProps {
  value?: string;
  placeholder?: string;
  title?: string;
  error?: string;
  type?: InputTypes;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

