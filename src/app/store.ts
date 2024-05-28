import { resolve } from "path";
import { create } from "zustand";

/*
1. Define types
2. create the useCounterStore, add the zustand create, give it a type , then give a function that returns the initial state
3. define the functions type
4. create provides a set function that allows you to update the state
5. the set function lets me acces the state function then call it to update the state
*/

//----1
type CounterStore = {
  count: number;
  increment: () => void;
  incrementAsync: () => Promise<void>;
  decrement: () => void;
};

//----2
export const useCounterStore = create<CounterStore>((set) => ({
  count: 0,
  increment: () => {
    set((state) => ({ count: state.count + 1 }));
  },
  incrementAsync: async () => {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    set((state) => ({ count: state.count + 1 }));
  },
  decrement: () => {
    set((state) => ({ count: state.count - 1 }));
  },
}));
