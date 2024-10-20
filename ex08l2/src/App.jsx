import Dia from './components/Dia'
import './App.css'

function App() {
  return (
    <div>
      <Dia Dia={true} />  
      <Dia Dia={false} /> 
    </div>
  );
}

export default App;