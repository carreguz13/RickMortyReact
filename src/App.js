import { useEffect } from "react" /*importing the hook useEffect, The Effect Hook lets you perform side effects in function components.

A quick example of side-effects would be:

Fetch data from an API
Manipulating the DOM.
Mutate (change) state
*/  
/*
1. No dependency passed:

useEffect(() => {
  //Runs on every render
});

2. An empty array:

useEffect(() => {
  //Runs only on the first render
}, []);

3. Props or state values:

useEffect(() => {
  //Runs on the first render
  //And any time any dependency value changes
}, [prop, state]);

*/

function App() {


useEffect (() => {
  
  },[])




  return (
   <h1>hola a todos</h1>
    
  )
}

export default App