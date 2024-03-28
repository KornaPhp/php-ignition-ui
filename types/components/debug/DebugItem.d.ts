import React from 'react';
import { LogLevel } from '../../types';
type Props = {
    children: React.ReactNode;
    context?: Record<string, string | object> | null;
    time: Date;
    level?: LogLevel | null;
    meta?: Record<string, string | number> | null;
};
export default function DebugItem({ children, context, level, meta, time }: Props): JSX.Element;
export {};
