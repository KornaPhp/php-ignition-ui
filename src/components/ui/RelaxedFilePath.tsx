import React from 'react';

type Props = {
    path: string;
    lineNumber?: null | number;
};

export default function RelaxedFilePath({ path, lineNumber = null }: Props) {
    const parts = path.split('/');
    const fileParts = parts.pop()?.split('.') || [];
    const extension = fileParts.pop();
    const fileName = fileParts.join('.');

    return (
        <span className="group">
            {parts.map((part, index) => (
                <React.Fragment key={index}>
                    <span key={index} className="group-hover:underline">
                        {part}
                    </span>
                    <span className="mx-0.5">/</span>
                    <wbr />
                </React.Fragment>
            ))}
            <span className="group-hover:underline font-semibold">{fileName}</span>
            <span className="group-hover:underline">.{extension}</span>

            {lineNumber && (
                <>
                    <span className="mx-0.5">:</span>
                    <span>{lineNumber}</span>
                </>
            )}
        </span>
    );
}