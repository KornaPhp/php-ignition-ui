import React, { useContext } from 'react';
import DefinitionList from '../../ui/DefinitionList';
import ErrorOccurrenceContext from '../../../contexts/ErrorOccurrenceContext';
import SfDump from '../../ui/SfDump';
import EditorLink from '../../ui/EditorLink';

export default function View() {
    const errorOccurrence = useContext(ErrorOccurrenceContext);
    const view = errorOccurrence.context_items.view;

    if (!view) {
        return null;
    }

    return (
        <DefinitionList>
            <DefinitionList.Row value={<EditorLink path={view.view} />} label="View" />
            <DefinitionList.Row
                value={
                    <DefinitionList>
                        {Object.entries(view.data).map(([key, data]) => (
                            <DefinitionList.Row key={key} label={key} value={<SfDump value={data} />} />
                        ))}
                    </DefinitionList>
                }
                label="Data"
            />
        </DefinitionList>
    );
}
