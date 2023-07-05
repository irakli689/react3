import classNames from "classnames"
import { useState } from "react";

const ITEMS=[
        {
            id: 1,
            title: 'lorem ipsum 1',
            completed: false
        },
        {
            id: 2,
            title: 'lorem ipsum 2',
            completed: false
        },
        {
            id: 3,
            title: 'lorem ipsum 3',
            completed: true
        },
        {
            id: 4,
            title: 'lorem ipsum 4',
            completed: true
        }
]

function TodoApp(){
    const [todo, setTodo] = useState(ITEMS);
    const [value, setValue] = useState('');

    function onItemChange (clickedItem) {
        const changedCompleted = todo.map( item=>{
            if(item.id===clickedItem.id){
                item.completed=!item.completed;
            }
            return item;
        });
        setTodo(changedCompleted)
    }

    
    function addList(e){
        e.preventDefault();
        const newObj = [
            ...todo,
            {
                id: Date.now(),
                title: value,
                completed: false
            }
            
        ]
        setTodo(newObj);
        setValue('')
    }

    return (
            <div>
                <form action="" onSubmit={addList}>
                    <input type="text" value={value} onChange={e=>setValue(e.target.value)}/>
                </form>
                <ul>
                    {todo.map(item=>{
                        return <li key={item.id} className={classNames({completed: item.completed})}>
                                    <input 
                                        type="checkbox" 
                                        checked={item.completed}
                                        onChange={() => onItemChange(item)}
                                    />
                                    {item.title}
                                    <button>delete</button>
                                </li>
                    })}
                </ul>
            </div>
        )
}

export default TodoApp