import {useState, useRef} from 'react';

const Example = () => {
  const [count, setCount] = useState(0); // re-renders component
  const countRef = useRef(0);             // does NOT re-render component
  //can render with a specified type: const countRef = useRef<number>(0);

  const incrementState = () => setCount(count + 1);
  const incrementRef = () => {
    countRef.current += 1;
    console.log('Ref count:', countRef.current);
  };

  return (
    <>
      <p>State count: {count}</p>
      <button onClick={incrementState}>Increment State</button>

      <button onClick={incrementRef}>Increment Ref (no render)</button>
    </>
  );
};
