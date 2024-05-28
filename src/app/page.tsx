"use client";

import { useEffect } from "react";
import { useCounterStore } from "./store";

const setCount = () => {
  useCounterStore.setState({ count: 5 });
  console.log("count set to 5");
};

export default function Home() {
  //access the count state from the store
  const count = useCounterStore((state) => state.count);
  const incrementAsync = useCounterStore((state) => state.incrementAsync);
  const decrement = useCounterStore((state) => state.decrement);

  useEffect(() => {
    setCount();
  }, []);
  return (
    <div>
      {count}
      <div>
        <button onClick={incrementAsync}>Increment</button>
        <button onClick={decrement}>Decrement</button>
      </div>
    </div>
  );
}
