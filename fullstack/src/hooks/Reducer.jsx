import React, { useReducer } from 'react'

let initialValue=0
let initialReact={like:0,dislike:0}
const counter=(state,action)=>{
    switch(action.type){
        case 'INCREMENT':
            return state+1
        case 'DECREMENT':
            return state-1
        case 'RESET':
            return 0
        default:
            return state
        }
}
const likeCounter=(state,action)=>{
    switch(action.type){
        case 'LIKE':
            return {...state, like : state.like+1}
        case 'DISLIKE':
            return {...state, dislike : state.dislike+1}
        default:
            return state
    }
}
const Reducer = () => {
    const [count,dispatch]=useReducer(counter,initialValue)
    const [likeCount,dispatch1]=useReducer(likeCounter,initialReact)

  return (
    <div>
        <h1>Count:{count}</h1>
        <button onClick={()=>dispatch({type:"INCREMENT"})}>+</button>
        <button onClick={()=>dispatch({type:"DECREMENT"})}>-</button>
        <button onClick={()=>dispatch({type:"RESET"})}>Reset</button>

        <h2>Task</h2>
        <h1>Likecount:{likeCount.like}</h1>
        <h1>dislikecount:{likeCount.dislike}</h1>
        <button onClick={()=>dispatch1({type:"LIKE"})}>👍</button>
        <button onClick={()=>dispatch1({type:"DISLIKE"})}>😒</button>
    </div>
  )
}

export default Reducer