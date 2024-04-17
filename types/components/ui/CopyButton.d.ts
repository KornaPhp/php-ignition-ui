import React from 'react';
type Props = {
    value: string;
    className?: string;
    alwaysVisible?: boolean;
    direction?: 'left' | 'right' | 'bottom';
    outside?: boolean;
    children?: React.ReactNode;
};
export default function CopyButton({ value, className, alwaysVisible, direction, outside, children }: Props): React.JSX.Element;
export {};
