/// <reference types="react" />
type Props = {
    message: string;
    exceptionClass: string;
    className?: string;
};
export default function FormattedExceptionMessage({ message, exceptionClass, className }: Props): JSX.Element;
export {};
