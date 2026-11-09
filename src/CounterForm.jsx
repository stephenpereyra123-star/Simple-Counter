import { useState } from "react";

export default function CounterForm({ updateVariants }) {
      const addVariant = (formData) => {
            const newStep = Number(formData.get("step"));
            const newMax = Number(formData.get("max"));

            updateVariants(newStep, newMax);
      };

      return (
            <form action={addVariant} className="flex flex-col justify-center items-center gap-2 w-3xs m-auto bo">
                  <label htmlFor="step" className="text-orange-500">
                        Enter Step
                  </label>
                  <input
                        type="number"
                        name="step"
                        id="step"
                        className="text-center cursor-pointer text-orange-500 border-white border-1 rounded-lg no-spinner"
                  />

                  <label htmlFor="max" className="text-orange-500">
                        Enter Max
                  </label>
                  <input
                        type="number"
                        id="max"
                        name="max"
                        className="text-center cursor-pointer text-orange-500. border-1 border-white rounded-lg no-spinner"
                  />

                  <button className="text-orange-500 border-white border-1 p-2 rounded-md text-[15px]">
                        Set Variants
                  </button>
            </form>
      );
}
