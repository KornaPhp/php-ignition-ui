import React from 'react';
import { ErrorFrame } from '../../../types';
declare type Props = {
    openFrameIndex?: number;
    frames: ErrorFrame[];
};
export default function StackTraceExplorer({ frames, openFrameIndex }: Props): React.JSX.Element;
export {};
