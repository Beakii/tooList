import React, {useContext} from 'react';
import {ToolistContext} from '../context/ToolistContext';
import Item from './Item'

const ItemList = () => {
    const {items} = useContext(ToolistContext)

    return (
        <div>
            {
            items.length 
            ? 
            (
                <ul className="list">
                    {items.map((item) => {
                        return <Item item={item} key={item.id}/>;
                    })}
                </ul>
            ) 
            :
                <div className="no-tasks">No Items</div>
            }

        </div>
    )
}

export default ItemList
