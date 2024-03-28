import React from 'react';
import { ContextGroupProps } from './ContextGroup';
type Props = {
    children: Array<React.ReactElement<ContextGroupProps> | null | false>;
};
export default function ContextSections({ children }: Props): JSX.Element;
export {};
