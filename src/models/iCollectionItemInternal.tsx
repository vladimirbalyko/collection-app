import { ICollectionItem } from "./collectionItem";
import { RouteComponentProps } from "react-router";

export interface ICollectionItemInternal extends ICollectionItem, RouteComponentProps<any> {}