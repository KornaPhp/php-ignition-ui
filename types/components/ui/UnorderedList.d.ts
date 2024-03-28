import React from 'react';
type Props = {
    className?: string;
    style?: React.CSSProperties;
    children?: React.ReactNode | React.ReactNodeArray;
};
declare function UnorderedList({ children, className, ...props }: Props): JSX.Element;
declare namespace UnorderedList {
    var Item: typeof UnorderedListItem;
}
export default UnorderedList;
type Value = string | React.ReactNode | Array<any> | Object;
type UnorderedListItemProps = {
    value?: Value;
};
declare function UnorderedListItem({ value }: UnorderedListItemProps): JSX.Element;
