import React, { createContext, useContext } from 'react';

/**
 * ContextExp demonstrates how to create and consume a React Context.
 * 
 * useContext allows components to read values from a Context Provider 
 * without manually passing props through every level of the component tree.
 */


const ThemeContext = createContext("light");

const ContextExp = () => {
  return (
    <ThemeContext.Provider value="dark">
      <Form />
    </ThemeContext.Provider>
  );
};

const Form = () => {
  const theme = useContext(ThemeContext);
  return (
    <div style={styles.container}>
      <h2>Current Theme: {theme}</h2>
      <Button theme={theme} />
    </div>
  );
};

const Button = ({ theme }) => {
  return (
    <button style={theme === "dark" ? styles.darkButton : styles.lightButton}>
      {theme === "dark" ? "Dark Mode" : "Light Mode"}
    </button>
  );
};

const styles = {
  container: {
    textAlign: "center",
    marginTop: "50px",
    fontFamily: "sans-serif",
  },
  darkButton: {
    backgroundColor: "#333",
    color: "#fff",
    border: "none",
    padding: "10px 15px",
    borderRadius: "6px",
    cursor: "pointer",
  },
  lightButton: {
    backgroundColor: "#eee",
    color: "#000",
    border: "none",
    padding: "10px 15px",
    borderRadius: "6px",
    cursor: "pointer",
  },
};

export default ContextExp;
