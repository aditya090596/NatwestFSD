import { GET_ITEMS, REMOVE_ITEM, ADD_ITEM } from "./type";


export function getItems()
{
    return {
        type:GET_ITEMS
    }
}

export function deleteItem(id)
{
    return {
        type:REMOVE_ITEM,
        payload: id
    }
}

export function addItem(item)
{
    console.log("Inside start of additem Mentod");
    return {
        type: ADD_ITEM,// anythinjg
        payload: item // id n text
    }
}

//3. Actions are defined on this page which is binded to the UI using import and connect. Actions send the UI actions to reducer to processing.

// here to AddItem