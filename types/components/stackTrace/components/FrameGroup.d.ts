import React from 'react';
import { StackFrameGroupType } from '../../../types';
type Props = {
    frameGroup: StackFrameGroupType;
    onExpand: () => void;
    onSelect: (frameNumber: number) => void;
};
export default function FrameGroup({ frameGroup, onExpand, onSelect }: Props): React.JSX.Element;
export {};
