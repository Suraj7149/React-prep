import React, { useRef, useImperativeHandle, forwardRef } from 'react';

/**
 * useImperativeHandle is a React Hook that lets you
 * customize the value exposed to parent components when using refs.
 * 
 * It is typically used with React.forwardRef() to allow
 * parent components to directly call functions or access properties
 * defined inside a child component — without exposing its entire internals.
 */

const ChildComponent = forwardRef((props, ref) => {
  const inputRef = useRef(null);

  // Expose custom methods to the parent through the ref
  useImperativeHandle(ref, () => ({
    focusInput: () => {
      inputRef.current?.focus();
    },
    clearInput: () => {
      inputRef.current.value = '';
    },
  }));

  return (
    <div style={styles.container}>
      <input ref={inputRef} type="text" placeholder="Type something..." style={styles.input} />
    </div>
  );
});

const ImpHdlExp = () => {
  const childRef = useRef(null);

  return (
    <div style={styles.container}>
      <h2>useImperativeHandle Example</h2>

      <ChildComponent ref={childRef} />

      <div style={styles.buttonContainer}>
        <button onClick={() => childRef.current.focusInput()} style={styles.button}>
          Focus Input
        </button>
        <button onClick={() => childRef.current.clearInput()} style={styles.button}>
          Clear Input
        </button>
      </div>
    </div>
  );
};

const styles = {
  container: {
    textAlign: "center",
    fontFamily: "sans-serif",
    marginTop: "30px",
  },
  input: {
    padding: "10px",
    fontSize: "16px",
    width: "250px",
  },
  buttonContainer: {
    marginTop: "15px",
    display: "flex",
    justifyContent: "center",
    gap: "10px",
  },
  button: {
    padding: "10px 15px",
    fontSize: "16px",
    cursor: "pointer",
    border: "none",
    backgroundColor: "#007BFF",
    color: "#fff",
    borderRadius: "6px",
  },
};

export default ImpHdlExp;
