import React from 'react'

const Counter = () => {

    const [counter, setcounter]=React.useState(0);

    const handleAdd=() =>
    {
        setcounter(counter+1)
    }
    const handleminus=() =>
    {
        if(counter>0)
        {
            setcounter(counter-1)
        }
        
    }

    const handleDouble=()=>
    {
        setcounter(counter*2)
    }

  return (
    <div>
        <h1>Counter</h1>
        <h2 style={counter%2==0 ? {color: "green"} : {color:"red"}}>{counter}</h2>
        <button onClick={handleAdd}>Increment</button>
        <button onClick={handleminus}>Decrement</button>
        <button onClick={handleDouble}>Double</button>

    </div>
  )
}

export default Counter