import React, { useState } from "react";

const State = () => {
  /** 
   * useState is a React Hook for managing state in functional components.
   * It's perfect for handling simple, local state like form inputs or toggles.
   */

  const [value, setValue] = useState("");
  const [isVisible, setIsVisible] = useState(true);

  const handleChange = (e) => setValue(e.target.value);
  const toggleVisibility = () => setIsVisible((prev) => !prev);

  return (
    <div style={styles.container}>
      <h1>React useState Example</h1>
      <h3>Please type below:</h3>

      <input
        type="text"
        value={value}
        onChange={handleChange}
        style={styles.input}
        placeholder="Type text here.."
      />

      <h1>Value: {value || "Nothing yet.."}</h1>

      {isVisible && <h2>This Text is toggled by button click.</h2>}

      <button onClick={toggleVisibility} style={styles.button}>
        {isVisible ? "Hide Text" : "Show Text"}
      </button>
    </div>
  );
};

// Inline style object (cleaner and reusable)
const styles = {
  container: {
    textAlign: "center",
    padding: "20px",
    fontFamily: "sans-serif",
  },
  input: {
    padding: "10px",
    fontSize: "18px",
    width: "300px",
    margin: "10px 0",
  },
  button: {
    padding: "10px 15px",
    fontSize: "18px",
    cursor: "pointer",
    border: "none",
    backgroundColor: "#007BFF",
    color: "#fff",
    borderRadius: "8px",
  },
};

export default State;