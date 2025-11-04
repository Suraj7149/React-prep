import {React, useLayoutEffect, useRef} from 'react'

const LayoutEffect = () => {

    /**
     * useLayoutEffect is for more limited use-cases compared to useEffect.
     * It fires synchronously (hence used less) after all DOM mutations 
     * but before the browser has a chance to paint.
     * useEffect (asynchronously) runs after the paint.
    */
   {/** paint - the browser's rendering process of drawing pixels 
                on the screen after React has updated the DOM.*/}
    

    // Example:-
                    
    // const ref = useRef(null);
    // const [tooltipHeight, setTooltipHeight] = React.useState(0);

    // useLayoutEffect(() => {
    //     const {height} = ref.current.getBoundingClientRect();
    //     setTooltipHeight(height);
    // }, []);

  return (
    
    <div>
      
    </div>
  )
}

export default LayoutEffect
