import logo from './logo.svg';
import data from './data'
import './App.css';
import { useState } from 'react';
import Tours from './components/Tours';

function App() {

  const [tours,setTours] = useState(data);

  function removeTour(id){
    const newTour = tours.filter(tour=> tour.id !== id);
    setTours(newTour);
  }

if(tours.length === 0){
  return(
    <div className='refresh'>
      <h2>No Tours Left</h2>
      <button className='btn-white' onClick={()=> setTours(data)}>Refresh</button>
    </div>
  );
}


  return (
    <div className='App'>

      
      {/* clone and passed data  */}
      <Tours tours={tours} removeTour={removeTour}></Tours>




    </div>
  )
};

export default App;
