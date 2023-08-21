import React from 'react';
declare type Props = {
    value: string;
    className?: string;
    alwaysVisible?: boolean;
    direction?: 'left' | 'right' | 'bottom';
    outside?: boolean;
    children?: React.ReactNode;
};
export default function CopyButton({ value, className, alwaysVisible, direction, outside, children }: Props): JSX.Element;
export {};
