import { useState } from "react";
import CounterForm from "./CounterForm";
import CounterDisplay from "./CounterDisplay";

export default function Counter() {
      const [total, setTotal] = useState(0);
      const [step, setStep] = useState(1);
      const [max, setMax] = useState(10);

      const updateVariants = (newStep, newMax) => {
            setStep(newStep);
            setMax(newMax);
            setTotal(0);
      };

      const increment = () => {
            if (max !== 0) {
                  setTotal((prev) => prev + step);
                  setMax((prevMax) => prevMax - step);
            }
      };
      const decrement = () => {
            if (total > 0) {
                  setTotal((prev) => prev - step);
                  setMax((prevMax) => prevMax + step);
            }
      };
      const reset = () => {
            setTotal(0);
            setStep(1);
            setMax(10);
      };

      return (
            <div className="flex flex-col justify-center items-center w-xl bg-black rounded-lg">
                  <CounterForm updateVariants={updateVariants} />
                  <CounterDisplay
                        decrement={decrement}
                        increment={increment}
                        total={total}
                        reset={reset}
                        available={max}
                  />
            </div>
      );
}
