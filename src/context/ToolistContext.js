import React, {createContext, useState, useEffect} from 'react';
import uuid from 'uuid';

export const ToolistContext = createContext();

const ToolistContextProvider = props => {
    const initState = JSON.parse(localStorage.getItem('items')) || [];

    const [items, setItems] = useState(initState);

    const [editItem, setEditItem] = useState(null);

    useEffect(() => {
        localStorage.setItem('items', JSON.stringify(items))
    }, [items]);

    const addItem = (title) => {
        setItems([...items, {title, id: uuid()}])
    }

    const removeItem = id =>{
        setItems(items.filter(item => item.id !== id));
    }

    const clearList = () => {
        setItems([]);
    }

    const findItem = id =>{
        const item = items.find(item => item.id === id);

        setEditItem(item);
    }

    const editListItem = (title, id) =>{
        const newItems = items.map(item => (item.id === id ? {title, id} : item));

        setItems(newItems);
        setEditItem(null);
    }

    return(
        <ToolistContext.Provider value={{
            items,
            addItem, 
            removeItem, 
            clearList, 
            findItem, 
            editListItem,
            editItem
        }}>
            {props.children}
        </ToolistContext.Provider>
    );
}

export default ToolistContextProvider;