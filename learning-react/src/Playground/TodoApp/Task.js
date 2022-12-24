export const Task = (props) => {
    return (
        <div className='task'>
            {/* { props.complete ? <h1 style={{color: 'green'}}>{props.taskName}</h1> : <h1 style={{color: 'black'}}>{props.taskName}</h1>} */}
            <h1 style={{color: props.complete ? 'green' : 'black'}}> {props.taskName} </h1>
            <button className="button2"onClick={() => props.completeTask(props.id)}> Completed </button>           
            <button onClick={() => props.deleteTask(props.id)}>X</button>
        </div>
    )
}