import React from 'react';
import { ErrorFrame } from '../../../types';
import { Row } from './FrameCodeSnippet';
type Props = {
    highlight: boolean;
    frame: ErrorFrame;
    lineNumber: number;
    row: Row;
};
export default function FrameCodeSnippetLine({ highlight, row, frame, lineNumber }: Props): React.JSX.Element;
export {};
