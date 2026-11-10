export default function CounterDisplay({ decrement, increment, total, reset, available }) {
      return (
            <div className="select-none flex flex-col justify-between w-lg">
                  <div className="flex justify-center items-center w-full gap-18 ">
                        <span onClick={decrement} className=" cursor-pointer text-center text-[35px] text-[#6366F1]">
                              -
                        </span>
                        <span className="text-[30px]">{total}</span>
                        <span onClick={increment} className="text-[35px] cursor-pointer  text-center text-[#6366F1]">
                              +
                        </span>
                  </div>
                  <p className="self-center text-xl">
                        Available: <span className="text-xl ml-2">{available}</span>
                  </p>

                  <button onClick={reset} className="cursor-pointer text-[#6366F1]">
                        Reset
                  </button>
            </div>
      );
}

// Background: #F8FAFC
// Card: #FFFFFF
// Accent: #4043f4
// Text: #0F172A
