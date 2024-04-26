import React from 'react';
export type ContextSectionProps = {
    icon?: React.ReactNode;
    title: string;
    children: React.ReactNode;
    anchor: string;
    secondaryTitle?: boolean;
};
export default function ContextSection({ icon, title, children, anchor, secondaryTitle }: ContextSectionProps): React.JSX.Element;
