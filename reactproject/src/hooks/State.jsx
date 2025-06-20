import {useState} from "react"
const State = () => {
    const [count,setCount]=useState(0)
    const [Like,setLike]=useState(0)
    const [Dislike,setDislike]=useState(0)

    const handleIncrement=()=>{
        setCount(count+1)
    }

  return (
    <div>
        <h1>Count:{count}</h1>
        <button onClick={handleIncrement}>Increment</button>
       <h1>Like and Dislike count</h1>
       <button onClick ={()=>setLike(Like+10)}>👍{Like}</button>
       <button onClick ={()=>setDislike(Dislike+10)}>👎{Dislike}</button>
    </div>
  )
}

export default State
