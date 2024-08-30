 import { useMemo } from 'react';
import './App.css';
 import { useState } from 'react';

function App() {
  const [weight , setWeight] = useState(80)
  const [height , setheight] = useState(150)

  const onweightChange = (e) => {
    setWeight(e.target.value);
  } 

const onheightChange = (e) => {
  setheight(e.target.value);
}

const output = useMemo(() => {
     const calculateheight = height/100;
     const result = (weight / (calculateheight*calculateheight)) ;
     return result.toFixed(1);
},[weight,height]);

  return (
   <main>
    <h1>BMI calculator</h1>
    <div className='input_section'>
        <p>Weight :  {weight}kg</p>
        <input type="range" min='50' max='180' onChange={onweightChange}/>
        <p>Height : {height} cm</p>
        <input type="range" min='150' max='400' onChange={onheightChange} />

        <p>your BMI is {output}</p>
    </div>
   </main>
  );
}

export default App;
