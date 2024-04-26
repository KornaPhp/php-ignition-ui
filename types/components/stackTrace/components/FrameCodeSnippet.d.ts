import React from 'react';
import { ErrorFrame } from '../../../types';
export type Row = Node[];
type Node = {
    type: string;
    tagName?: string;
    properties: {
        className: null | string;
    };
    children: Node[];
};
type Props = {
    frame: ErrorFrame;
};
export default function FrameCodeSnippet({ frame }: Props): React.JSX.Element;
export {};
