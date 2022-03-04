import { ErrorFrame, FrameType } from '../../types';
export declare function addFrameNumbers(frames: Array<ErrorFrame>): Array<ErrorFrame & {
    frame_number: number;
}>;
export declare function getFrameType(frame: ErrorFrame): FrameType;
