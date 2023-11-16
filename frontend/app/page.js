"use client"
import { useDispatch, useSelector } from 'react-redux';
import { increment, decrement } from './reduxToolkit/features/counterSlice/counterSlice';
import ThemeChanger from './components/ThemeChanger';

function app() {
  const dispatch = useDispatch();
  const counter = useSelector(state => state.counter.value);

  return (
    <div>
      <ThemeChanger/>
      <p className='dark:text-red-300 '>Counter: {counter}</p>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(decrement())}>Decrement</button>


      <div class="bg-white dark:bg-slate-800 rounded-lg px-6 py-8 ring-1 ring-slate-900/5 shadow-xl">
  <div>
  
  </div>
  <h3 class="text-slate-900 dark:text-white mt-5 text-base font-medium tracking-tight">Writes Upside-Down</h3>
  <p class="text-slate-500 dark:text-slate-400 mt-2 text-sm">
    The Zero Gravity Pen can be used to write in any orientation, including upside-down. It even works in outer space.
  </p>
</div>
    </div>
  );
}

export default app;