function TodoApp(){
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
    return <div>
        <ul>
            {ITEMS.map(item=>{
                return <li key={item.id} className={item.completed ? 'completed' : ''}>
                    <input type="checkbox"/>
                    {item.title}
                    <button>delete</button>
                </li>
            })}
        </ul>
    </div>
}

export default TodoApp