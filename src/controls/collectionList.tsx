import React from 'react';
import { CollectionItem } from './collectionItem';
import { ICollectionItem } from '../models/collectionItem';
import styled from 'styled-components';

const CollectionContext = styled.div`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
`;

export class CollectionList extends React.Component<{}, {}> {
    state = {
        items: [] as ICollectionItem[]
    };

    componentWillMount() {
    }

    componentDidMount() {

        const tempItems = [
            { title: "Title1", url: "https://freepngimg.com/thumb/mario/20698-7-mario-transparent-background.png", description: "Description1", id: 1 },
            { title: "Title2", url: "https://freepngimg.com/thumb/mario/20547-2-mario-photos.png", description: "Description2", id: 2 },
            { title: "Title3", url: "https://freepngimg.com/thumb/mario/20718-3-mario-clipart.png", description: "Description3", id: 3 },
            { title: "Title1", url: "https://freepngimg.com/thumb/mario/20698-7-mario-transparent-background.png", description: "Description1", id: 4 },
            { title: "Title2", url: "https://freepngimg.com/thumb/mario/20547-2-mario-photos.png", description: "Description2", id: 5 },
            { title: "Title3", url: "https://freepngimg.com/thumb/mario/20718-3-mario-clipart.png", description: "Description3", id: 6 },
            { title: "Title1", url: "https://freepngimg.com/thumb/mario/20698-7-mario-transparent-background.png", description: "Description1", id: 7 },
            { title: "Title2", url: "https://freepngimg.com/thumb/mario/20547-2-mario-photos.png", description: "Description2", id: 8 },
            { title: "Title3", url: "https://freepngimg.com/thumb/mario/20718-3-mario-clipart.png", description: "Description3", id: 9 }
        ] as ICollectionItem[];

        this.setState({ items: tempItems });
    }

    render() {
        return (
            <CollectionContext>
                {
                    this.state.items.map((item, index) => {
                        return (
                            <CollectionItem key={index} url={item.url} title={item.title} description={item.description} id={item.id}/>
                        );
                    })
                }
            </CollectionContext>
        );
    }
}