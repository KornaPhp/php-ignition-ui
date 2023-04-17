import React from 'react';
type Props = {
    children: React.ReactNode;
    language: 'sql' | 'curl' | 'json';
};
export default function HighlightedCode({ children, language }: Props): JSX.Element;
export {};
