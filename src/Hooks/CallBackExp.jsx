import React, {useCallback, useState } from 'react'

const CallBackExp = () => {

    /**
     * like useMemo, useCallback is also used to optimize performance in React applications.
     * While useMemo memoizes the result, useCallback memoizes the function itself.
     * This method is mostly used for callback functions that are passed as props to child components.
     * When a parent component re-renders, it creates new instances of functions defined within it.
     * 
     */

    function Counter(){
        const [count, setCount] = useState(0);

        const increment = useCallback(() => {
            setCount((c) => c + 1);
        })

        return (<div>
            <h1>Count: {count}</h1>
            <button onClick={increment}>Increment</button>
        </div>
        )
    }
  return (
    <div>
        {Counter()}
    </div>
  )
}

export default CallBackExp
