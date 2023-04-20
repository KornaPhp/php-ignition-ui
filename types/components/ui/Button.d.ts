import React, { ButtonHTMLAttributes } from 'react';
type Props = {
    children: React.ReactNode;
    className?: string;
} & ButtonHTMLAttributes<HTMLButtonElement>;
export default function Button({ children, className, disabled, ...props }: Props): JSX.Element;
export {};
