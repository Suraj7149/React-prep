import React, {useState, useRef} from 'react'

const Ref = () => {
    /**
   * useRef is a React Hook that returns a mutable object
   * which persists for the entire lifetime of the component.
   *
   * Common use cases:
   *  - Accessing and manipulating DOM elements directly
   *  - Storing mutable values that don’t trigger re-renders
   *
   * Unlike useState, changing a ref’s value does not cause a re-render.
   * The current value is accessed through the `.current` property.
   *
   * Think of it as a "box" that can hold a value without affecting rendering.
   */

    const [Timer, setTimer] = useState(0);
    const intervalRef = useRef(null);

    const startTimer = () => {
        if (Timer === 0){
            intervalRef.current = setInterval(() => {
                setTimer((prevTimer) => prevTimer + 1);
                }, 1000);
        }else{
            alert("Timer is already running!");
        }
    }

    const stopTimer = () => {
        clearInterval(intervalRef.current);
    }

    const clearTimer = () => {
        setTimer(0);
    }

  return (
    <div style={styles.container}>
        <h1>Timer</h1>
        <h1>{Timer}</h1>
        <button onClick={startTimer}>Start Timer</button>
        <button onClick={stopTimer}>Stop Timer</button>
        <button onClick={clearTimer}>Clear Timer</button>
      
    </div>
  )
}

const styles = {
    container: {
        width: "100%",
        height: "100%",
        textAlign: "center",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: "12px",
        fontFamily: "sans-serif"
    }

};

export default Ref
