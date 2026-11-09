export default function CounterDisplay({ decrement, increment, total, reset, available }) {
      return (
            <div className="select-none flex flex-col justify-center items-center gap-12 w-lg h-100">
                  <div className="flex justify-center items-center w-full gap-15 ">
                        <span onClick={decrement} className=" cursor-pointer text-center text-[50px] text-orange-500">
                              -
                        </span>
                        <span className="text-[35px] text-white">{total}</span>
                        <span onClick={increment} className="text-[50px] cursor-pointer  text-center text-orange-500">
                              +
                        </span>
                  </div>
                  <p className="text-white">{available}</p>

                  <button onClick={reset} className="cursor-pointer text-white">
                        Reset
                  </button>
            </div>
      );
}
