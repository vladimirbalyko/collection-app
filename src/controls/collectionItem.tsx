import React, { useEffect } from "react";
import { makeStyles } from '@material-ui/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import { withRouter, RouteComponentProps } from 'react-router-dom';
import { ICollectionItem } from "../models/collectionItem";

const useStyles = makeStyles({
    card: {
        width: "20em",
        marginBottom: "2.5em",
        marginRight: "2.5em",
        maxHeight: "20em"
    },
    media: {
        height: 140,
    },
});

interface ICollectionItemInternal extends ICollectionItem, RouteComponentProps<any> {}

export const CollectionItem = (props: ICollectionItemInternal) => {
    const { url, title, description, id } = props;
    const classes = useStyles();

    useEffect(() => {
    });

    const onClick = () => {
        props.history.push("/item");
    }

    return (<Card className={classes.card}>
        <CardActionArea onClick={onClick}>
            <CardMedia
                className={classes.media}
                image={url}
                title={title}
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                    {title}
                </Typography>
                <Typography component="p">
                    {description}
                </Typography>
            </CardContent>
        </CardActionArea>
        <CardActions>
            <Button size="small" color="primary">
                Share
            </Button>
            <Button size="small" color="primary" onClick={onClick}>
                Learn More
           </Button>
        </CardActions>
    </Card>);
}

export default withRouter(CollectionItem);

