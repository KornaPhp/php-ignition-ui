/// <reference types="react" />
type Props = {
    path: string;
    lineNumber?: null | number;
};
export default function RelaxedFilePath({ path: fullPath, lineNumber }: Props): JSX.Element;
export {};
