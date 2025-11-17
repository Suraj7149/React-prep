import React, { useReducer, useRef } from 'react'

const Reducer = () => {
    /** 
     * useReducer is mostly used for complex state management.
     * Ideal for scenarios where state logic involves multiple sub-values 
     * or when the next state depends on the previous one.
     * useReducer uses a reducer state function to update state based on dispatched actions.
     */

  const initialState = { email: "", password: "" };

  const reducer = (state, action) => {
    
    switch(action.type){
      case "EMAIL":
        return {...state,email: action.payload}
      case "PASS":
        return {...state,password: action.payload}
      default:
        return state
    }
  }

  
  const [state, dispatch] = useReducer(reducer, initialState);

    
    
  return (
    <div style={styles.container}>
      <form action="">

        <input style={styles.input}
          type="email" placeholder='Email' onChange={(e) => dispatch({type: "EMAIL", payload: e.target.value})}
        />
        <h1>Email: {state.email}</h1>

        <input style={styles.input}
          type="password" placeholder='Password' onChange={(e) => dispatch({type: "PASS", payload: e.target.value})}                 
        />
        <h1>Password: {state.password}</h1>

      </form>
    </div>
  )
}

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    padding: "40px 20px",
    fontFamily: "Inter, sans-serif",
    minHeight: "100vh",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    gap: "12px",
    width: "320px",
  },
  input: {
    padding: "10px 12px",
    fontSize: "16px",
    borderRadius: "6px",
    border: "1px solid #ccc",
    outline: "none",
  },
  button: {
    padding: "10px 15px",
    fontSize: "16px",
    cursor: "pointer",
    border: "none",
    backgroundColor: "#007BFF",
    color: "#fff",
    borderRadius: "6px",
    transition: "background-color 0.3s ease",
  },
};


export default Reducer
