import './index.css';
import Navbar from './navbar';
import Home from './Home';

function App() {   //component, jsx is returned in a component.
  //define variables before return
  
  

  
  return (
    <div className="App">
      <Navbar />  {/* or <Navbar></Navbar> */}
      <Home />

      <div className="content">
        
      </div>
    </div>
  );
}

export default App;
