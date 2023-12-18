import './index.css';
import Navbar from './navbar';
import Home from './Home';
import Create from './Create';
import BlogDetails from './BlogDetails';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom/cjs/react-router-dom.min';

function App() {   //component, jsx is returned in a component.
  //define variables before return
  
  

  
  return (
    <Router>
    <div className="App">
      <Navbar />  {/* or <Navbar></Navbar> */}
      <div className="content">
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/create">
            <Create />
          </Route>
          <Route path="/blogs/:id">
            <BlogDetails />
          </Route>

        </Switch>
      </div>
    </div>
    </Router>
    
  );
}

export default App;
