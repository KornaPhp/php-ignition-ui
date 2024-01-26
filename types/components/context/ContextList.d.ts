/// <reference types="react" />
type Props = {
    items: Record<string, string | object | boolean | number | undefined>;
};
export default function ContextList({ items }: Props): JSX.Element;
export {};
