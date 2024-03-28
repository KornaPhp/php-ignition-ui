type Props = {
    file: string;
    lineNumber?: number;
};
export default function useEditorUrl({ file, lineNumber }: Props): {
    url: string;
    clipboard: boolean;
};
export {};
