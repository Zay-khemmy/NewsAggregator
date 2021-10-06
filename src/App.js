import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from './pages/Home'
import User from './pages/User'

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path='/' exact> <Home /> </Route>
          <Route path="/:id"> <User/> </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
