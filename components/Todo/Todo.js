import {useState} from 'react'
export default function Todo() {
    const [state, setState] = useState("")
    const [items,setItems] =useState([])
    const handleSubmit = (e) =>
    {
        e.preventDefault()
        if (state)
        {
            setItems([{
                id: Math.random()*1000,
                message: state,
                done: false,
                
            }, ...items])
            console.log(items)
            setState(" ")
        }

    }
    const handleDone = (id) =>
    {
        const list = items.map((item) =>
        {
           
            if (item.id === id)
            {
                item.done = !item.done
                return item
            }
            else
            {
                return item
            }
        })
        setItems(list)
        console.log(list)
       
        
    }
    const countTask = () =>
    {
        let count = 0; 
        items.map(todo =>
        {
            if(!todo.done) count++
        })
        return count
    }
 
    return (
        <div> 
        <form>
            <input type="text" placeholder="enter value" onChange = {(e)=> setState(e.target.value)} />
                <button onClick={handleSubmit}> Add </button>
            </form>
            <ul>
            
        {items
          .map((item) => (
            <li
                  key={item.id}
                   className={`todo-item ${item.done && "todo-item-active"}`} 
              style = {{color:"black"}}
              onClick={() => handleDone(item.id)}
            >
                  {item.message}
                  
            </li>
          ))}
          <div>counter : {countTask()} </div>
            </ul>
            </div>
    )
}
