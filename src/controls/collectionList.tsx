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

    constructor(props: any) {
        super(props)
    }

    componentWillMount() {
        console.log("will mount");
    }

    componentDidMount() {
        console.log("did mount");

        const tempItems = [
            { title: "Title1", image: "https://freepngimg.com/thumb/mario/20698-7-mario-transparent-background.png", description: "Description1" },
            { title: "Title2", image: "https://freepngimg.com/thumb/mario/20547-2-mario-photos.png", description: "Description2" },
            { title: "Title3", image: "https://freepngimg.com/thumb/mario/20718-3-mario-clipart.png", description: "Description3" },
            { title: "Title1", image: "https://freepngimg.com/thumb/mario/20698-7-mario-transparent-background.png", description: "Description1" },
            { title: "Title2", image: "https://freepngimg.com/thumb/mario/20547-2-mario-photos.png", description: "Description2" },
            { title: "Title3", image: "https://freepngimg.com/thumb/mario/20718-3-mario-clipart.png", description: "Description3" },
            { title: "Title1", image: "https://freepngimg.com/thumb/mario/20698-7-mario-transparent-background.png", description: "Description1" },
            { title: "Title2", image: "https://freepngimg.com/thumb/mario/20547-2-mario-photos.png", description: "Description2" },
            { title: "Title3", image: "https://freepngimg.com/thumb/mario/20718-3-mario-clipart.png", description: "Description3" }
        ] as ICollectionItem[];

        this.setState({ items: tempItems });
    }

    render() {
        return (
            <CollectionContext>
                {
                    this.state.items.map((item, index) => {
                        return (
                            <CollectionItem key={index} url={item.image} title={item.title} description={item.description} />
                        );
                    })
                }
            </CollectionContext>
        );
    }
}