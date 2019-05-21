import React from 'react';
import { ICollectionItem } from '../models/collectionItem';
import styled from 'styled-components';
import ActionButtons from './floatingActionButtons';

const Context = styled.div`
    display: flex;
    flex-direction: column;
    /* Border */
    border-style: solid;
    border-color: #ddd;
    border-width: 1px;
    border-radius: 1em;
`;

const ContextInfo = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 2.5em;
    margin-right: 2.5em;
    padding-left: 1em;

    img {
        width: 20em;
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

export class CollectionItemFull extends React.Component<ICollectionItem>{
    state = {
        item: {} as ICollectionItem,
        isEditing: true
    };

    componentDidMount() {

        const tempItem = { title: "Title1", url: "https://freepngimg.com/thumb/mario/20698-7-mario-transparent-background.png", description: "Description1", id: 1 } as ICollectionItem;
        this.setState({ item: tempItem });
    }

    render() {
        const { url, title, description } = this.state.item;

        let PreviewItem = () => {
            return <CollectionInfo>
                        <Title>{title}</Title>
                        {description && <span>{description}</span>}
                    </CollectionInfo>
        }

        let EditItem = () => {
            return <CollectionInfo>
                        <label>Title:</label><input value={title}/>
                        <label>Description:</label><textarea value={description}/>
                    </CollectionInfo>
        }

        let component = PreviewItem;
        if(this.state.isEditing)
            component = EditItem;

        return (
            <Context>
                <ActionButtons/>
                <ContextInfo>
                    <div>
                        <img src={url} alt="" />
                    </div>
                    {component()}
                </ContextInfo>
            </Context>
        );
    }
}