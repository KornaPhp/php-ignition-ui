import { State } from '../types';
import { addFrameNumbers } from '../helpers';
import { ErrorFrame } from '../../../types';

export default function getSelectedFrame(state: State): ErrorFrame {
    return addFrameNumbers(state.frames).find((frame) => frame.frame_number === state.selected) as ErrorFrame;
}
