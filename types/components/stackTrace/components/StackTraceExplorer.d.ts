/// <reference types="react" />
import { ErrorFrame } from '../../../types';
type Props = {
    openFrameIndex?: number;
    frames: ErrorFrame[];
};
export default function StackTraceExplorer({ frames, openFrameIndex }: Props): JSX.Element;
export {};
