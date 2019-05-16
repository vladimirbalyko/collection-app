import React from 'react';

import styled from 'styled-components';

const Context = styled.div`
    display: flex;
    img {
        width: 4em;
    }
`;

const CollectionInfo = styled.div`
        display: flex;
        flex-direction: column;
        text-align: left;
        padding-left: 0.8em;
`;

interface ICollectionItem {
    url: string;
    title: string;
    description?: string;
}

export const CollectionItem = (props: ICollectionItem) => {
    const { url, title, description } = props;

    return (
        <Context>
            <div>
                <img src={url} alt="" />
            </div>
            <CollectionInfo>
                <span>{title}</span>
                {description && <span>{description}</span>}
            </CollectionInfo>
        </Context>

    );
}