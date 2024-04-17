import React from 'react';
type Props = {
    title: string;
    icon: React.ReactNode;
    anchor: string;
    active?: boolean;
};
export default function ContextNavItem({ icon, title, anchor, active }: Props): React.JSX.Element;
export {};
