import React from 'react';
import { IgnitionConfig } from '../types';
type Props = {
    children: React.ReactNode;
    ignitionConfig: IgnitionConfig;
};
export default function IgnitionConfigContextProvider({ children, ignitionConfig: initialIgnitionConfig }: Props): JSX.Element;
export {};
