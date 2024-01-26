type Options = {
    ignoreWhenActiveElementMatches?: string | null;
};
export default function useKeyboardShortcut(key: string, callback: (event: KeyboardEvent) => void, { ignoreWhenActiveElementMatches }?: Options): void;
export {};
