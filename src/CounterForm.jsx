export default function CounterForm({ updateVariants }) {
      const addVariant = (formData) => {
            const newStep = Number(formData.get("step"));
            const newMax = Number(formData.get("max"));

            updateVariants(newStep, newMax);
      };

      return (
            <form action={addVariant} className="flex flex-col items-start h=full text-[#0F172A] mt-3 border-r pr-6">
                  <label htmlFor="step" className="pb-2 font-medium">
                        Enter Step
                  </label>
                  <input
                        type="number"
                        name="step"
                        id="step"
                        className="no-spinner h-10 border rounded-lg mb-2 pl-1"
                        placeholder="0"
                  />

                  <label htmlFor="max" className="pb-2 font-medium">
                        Enter Max
                  </label>
                  <input
                        type="number"
                        id="max"
                        name="max"
                        className="no-spinner h-10 border rounded-lg mb-2 pl-1"
                        placeholder="0"
                  />

                  <button className="text-center w-full mt-3 bg-[#6366F1] hover:bg-[#6365f1b9] h-10 rounded-lg text-white cursor-pointer">
                        Set Variants
                  </button>
            </form>
      );
}

// Background: #F8FAFC
// Card: #FFFFFF
// Accent: #6365f1b9
// Text: #0F172A
