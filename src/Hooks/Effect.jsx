import React, { useState, useEffect, useRef } from 'react';

const Effect = () => {
  /**
    * useEffect Hook is used to perform side effects in react.
    * Side effects are operations that can affect other components and cannot be done during rendering.
    * Side effects lets you synchronize a system outside react.
    * 
    * There are 2 types of Side Effects:
    *  Event Based ( Button Clicks )
    *  Render-Based ( fetching Data )
    * 
    * However useEffect should not be used for either of these. 
    * It is ideal for syncing your React code with browser media APIs using a Reff.
    */

  const [count, setCount] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const videoRef = useRef(null);

  // Update document title when count changes
  useEffect(() => {
    document.title = `You clicked ${count} times`;
  }, [count]);

  // Play or pause the video based on `isPlaying`
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    isPlaying ? video.play() : video.pause();
  }, [isPlaying]);

  return (
    <div style={styles.container}>
      <h1>{count}</h1>

      <button onClick={() => setCount(prev => prev + 1)}>
        Click Me
      </button>

      {/* Example of proper useEffect: syncing React state with a media API */}
      <video
        ref={videoRef}
        src="src/assets/video1.mp4"
        loop
        playsInline
        muted
        width="250"
      />
    </div>
  );
};

const styles = {
  container: {
    textAlign: "center",
    padding: "20px",
    fontFamily: "sans-serif",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "15px",
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

export default Effect;
