import React from 'react';

import styled from 'styled-components';

const Context = styled.div`
    display: flex;
    align-items: center;

    margin-bottom: 2.5em;
    margin-right: 2.5em;
    padding-left: 1em;

    /* Border */
    border-style: solid;
    border-color: #ddd;
    border-width: 1px;
    border-radius: 1em;

    &:hover {
        /* color: #ff0; */
        background: #fc0;
        box-shadow: 0 0 10px rgba(0,0,0,0.5);
        /* padding: 10px; */
    }

    img {
        width: 4em;
    }
`;

const CollectionInfo = styled.div`
        display: flex;
        flex-direction: column;
        text-align: left;
        padding-left: 0.8em;
        width: 12em;
`;

const Title = styled.span`
    text-align: center;
    font-weight: 600;
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
                <Title>{title}</Title>
                {description && <span>{description}</span>}
            </CollectionInfo>
        </Context>

    );
}