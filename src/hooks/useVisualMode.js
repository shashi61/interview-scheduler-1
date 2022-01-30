import { useState } from 'react';

export default function useVisualMode(initial) {
  const [mode, setMode] = useState(initial);


  function transition(newMode, replace = false) {
    if (replace){
      setMode((prev) => [...prev.slice(0, prev.length - 1), newMode]);//backword
    } else {
      setMode((prev) => [...prev, newMode]);
    }
  } 
  function back() { 
   if (mode.length > 1) {
    setMode((prev) => [...prev.slice(0, prev.length - 1)])
   } else {
     return;
   }
  }
  return { mode: history[history.length - 1], transition, back };
}




