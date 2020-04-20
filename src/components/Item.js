import React, {useContext} from 'react'
import {ToolistContext} from '../context/ToolistContext';

const Item = ({item}) => {
    const {removeItem, findItem} = useContext(ToolistContext);

    return (
        <li className="list-item">
            <span>{item.title}</span>
            <div>
                <button onClick={() => findItem(item.id)} className="btn-edit task-btn">
                        <i className="fas fa-pen"></i>
                    </button>
                <button onClick={() => removeItem(item.id)} className="btn-delete task-btn">
                    <i className="fas fa-trash-alt"></i>
                </button>
            </div>
        </li>
    )
}

export default Item
