    import React, {useDeferredValue, useMemo, useState} from 'react'
    
    const DeferredValueExp = () => {
        /**
         * Allows you to pause an update in some cases if you have a large list or heavy computation.
         * similar to useTransition, but instead of marking the whole update as non-urgent,
         * it allows you to mark a specific value as non-urgent.
         * It returns a deferred version of the value that will lag behind the current value
         * if the current value is changing too quickly.
         * like scheduling an update on the Optimal Time.
         */
        const [input, setInput] = useState("");

        function handlechange(e){
          setInput(e.target.value)
        }

        function List({ input }){
          const LIST_SIZE = 20000;
          const deferredinput = useDeferredValue(input)
          const list = useMemo(() => {
            const l = []
            for (let i = 0; i < LIST_SIZE; i++){
              l.push(<div key={i}>{deferredinput}</div>)
            }

            return l

          }, [deferredinput])
        }
      return (
        <>
            <input type="text" value={input} onChange={handlechange} />
            {List(input)}
        </>
      )
    }
    
    export default DeferredValueExp
    