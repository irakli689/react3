import classNames from "classnames"
import { useContext, useEffect, useRef, useState } from "react";
import Input from "./components/Input";
import SelectTheme from "./components/SelectTheme";
import UserContext from "./context/UserContext";
import Auth from "./Auth";

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

function TodoApp () {
    const [todo, setTodo] = useState(ITEMS);
    const [value, setValue] = useState('');
    const inputRef = useRef();
    const userContext = useContext(UserContext);

    useEffect(() => {
        if(inputRef.current){
            inputRef.current.focus();
        }    
    },[]);
    

    function onItemChange (clickedItem) {
        const changedCompleted = todo.map( item=>{
            if(item.id===clickedItem.id){
                item.completed=!item.completed;
            }
            return item;
        });
        setTodo(changedCompleted)
    }

    const generateID = ()=> {
        return todo.length +1;
    }
    
    function onAddList(e){
        e.preventDefault();
        const newObj = [
            ...todo,
            {
                id: generateID(),
                title: value,
                completed: false
            }
            
        ]
        setTodo(newObj);
        setValue('')
    }

    function onClickDelete (romeveitem) {
        console.log(romeveitem.id);
        setTodo(todo.filter(item=>item.id !== romeveitem.id))
    }


    if(userContext.user == null){
        return <Auth />
    }
    return (
        <div>
            <form action="" onSubmit={onAddList}>
                <Input
                    ref={inputRef} 
                    type="text" 
                    value={value} 
                    onChange={e=>setValue(e.target.value)}
                />
            </form>
            <ul>
                {todo.map(item=>{
                    return (<li key={item.id} className={classNames({completed: item.completed})}>
                                <input 
                                    type="checkbox" 
                                    checked={item.completed}
                                    onChange={() => onItemChange(item)}
                                />
                                {item.title}
                                <button onClick={()=>onClickDelete(item)}>delete</button>
                            </li>)
                            
                })}
            </ul>
            <p>completed: {todo.filter(item=>item.completed).length}</p>
            <p>uncompleted: {todo.filter(item=>!item.completed).length}</p>
            <p>total: {todo.length}</p>
            <SelectTheme/>
        </div>
    )
}
    

export default TodoApp