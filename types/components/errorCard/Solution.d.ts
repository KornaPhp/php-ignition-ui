/// <reference types="react" />
import { ErrorSolution } from '../../types';
type Props = {
    solution: ErrorSolution;
    isOpen?: boolean;
    isCollapsible?: boolean;
    canExecute: boolean;
};
export default function Solution({ solution, isOpen: initialIsOpen, isCollapsible, canExecute, }: Props): JSX.Element;
export {};
