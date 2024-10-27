export interface ListItem {
    uuid: string;
    identifier: string;
}

export interface Action {
    type: string;
    payload: ListItem;
}