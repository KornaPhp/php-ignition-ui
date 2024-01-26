import React from 'react';
type Props = {
    children: React.ReactNode;
    fallbackComponent?: (githubLink: string) => React.ReactNode;
};
type State = {
    error: null | Error;
};
export default class ErrorBoundary extends React.Component<Props, State> {
    constructor(props: Props);
    static getDerivedStateFromError(error: Error): {
        error: Error;
    };
    render(): React.ReactNode;
}
export {};
