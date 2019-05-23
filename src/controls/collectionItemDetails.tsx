import React from 'react';
import { ICollectionItem } from '../models/collectionItem';
import styled from 'styled-components';
import ActionButtons from './floatingActionButtons';
import { TextField } from '@material-ui/core';
import cloneDeep from 'lodash/cloneDeep';

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
        padding-bottom: 15em;
        padding-left: 5em;
        width: 30em;
`;

const Title = styled.span`
    text-align: center;
    font-weight: 600;
    margin-bottom: 2em;
`;


export class CollectionItemDetails extends React.Component<ICollectionItem>{
    state = {
        item: {} as ICollectionItem,
        tempItem: {} as ICollectionItem,
        isEditing: false
    };

    componentDidMount() {
        const initItem = {
            title: "Title1", url: "https://freepngimg.com/thumb/mario/20698-7-mario-transparent-background.png",
            description: "Description1 Description1 Description1 Description1 Description1 Description1 Description1 Description1 Description1 Description1 Description1 Description1 ", id: 1
        } as ICollectionItem;
        this.setState({ item: initItem, tempItem: cloneDeep(initItem) });
    }

    onEditClick = () => {
        this.setState({ isEditing: true });
    }

    onSaveClick = () => {
        this.setState({ isEditing: false });
        this.setState({
            item: cloneDeep(this.state.tempItem)
        });
    }

    onCancelClick = () => {
        this.setState({
            isEditing: false,
            tempItem: cloneDeep(this.state.item)
        });
    }

    handleTitleChange = (arg: any) => {
        let tempItemCopy = this.state.tempItem;
        tempItemCopy.title = arg.target.value;
        this.setState({
            tempItem: tempItemCopy
        });
    }

    handleDescriptionChange = (arg: any) => {
        let tempItemCopy = this.state.tempItem;
        tempItemCopy.description = arg.target.value;
        this.setState({
            tempItem: tempItemCopy
        });
    }

    render() {
        const { url, title, description } = this.state.tempItem;
        return (
            <Context>
                <ActionButtons isEditing={this.state.isEditing}
                    onEditClick={this.onEditClick}
                    onSaveClick={this.onSaveClick}
                    onCancelClick={this.onCancelClick} />
                <ContextInfo>
                    <div>
                        <img src={url} alt="" />
                    </div>
                    {!this.state.isEditing &&
                        <CollectionInfo>
                            <Title>{title}</Title>
                            {description && <span>{description}</span>}
                        </CollectionInfo>
                    }

                    {this.state.isEditing &&
                        <CollectionInfo>
                            <TextField
                                id="standard-with-placeholder"
                                label="Title"
                                placeholder="Title"
                                value={title}
                                margin="normal"
                                onChange={this.handleTitleChange}
                            />
                            <TextField
                                id="standard-textarea"
                                label="Description"
                                placeholder="Description"
                                value={description}
                                multiline
                                margin="normal"
                                onChange={this.handleDescriptionChange}
                            />
                        </CollectionInfo>
                    }
                </ContextInfo>
            </Context>
        );
    }
}