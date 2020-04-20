import React, {useContext, useState, useEffect} from 'react'
import {ToolistContext} from '../context/ToolistContext';

const ItemForm = () => {
    const {addItem, clearList, editItem, editListItem} = useContext(ToolistContext);

    const [title, setTitle] = useState("");

    const handleChange = event =>{
        setTitle(event.target.value);
    }

    const handleSubmit = event =>{
        event.preventDefault();

        if(!editItem){
            addItem(title);
            setTitle("");
        }
        else{
            editListItem(title, editItem.id);
        }
    }

    useEffect(() => {
        if(editItem){
            setTitle(editItem.title);
        }
        else{
            setTitle("");
        }
    }, [editItem]);

    return (
        <form onSubmit={handleSubmit} className="form">
            <input onChange={handleChange} value={title} type="text" className="task-input" placeholder="Add item..." required/>
            <div className="buttons">
                <button type="submit" className="btn add-task-btn">
                    {editItem ? 'Edit Item' : 'Add Item'}
                </button>
                <button onClick={clearList} type="reset" className="btn clear-btn">Clear List</button>
            </div>
        </form>
    )
}

export default ItemForm
