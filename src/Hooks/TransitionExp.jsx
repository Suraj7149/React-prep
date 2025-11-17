import React, {useTransition} from 'react'

const TransitionExp = () => {
    /**
     * In React all the statue Change updates are considered urgent by default.
     * To Specify, certain updates as non-urgent, we can use the useTransition hook.
     * It allows us to mark some state updates as transitions.
     * It can help make the app more responsive by allowing urgent updates to be processed first
     * and delaying heavy-computational updates until later.
    */
  return (
    <div>
      
    </div>
  )
}

export default TransitionExp
