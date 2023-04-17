import React from 'react';
export type ContextGroupProps = {
    title: string;
    children: Array<React.ReactElement | null | false>;
    anchor: string;
};
export default function ContextGroup({ title, children, anchor }: ContextGroupProps): JSX.Element;
