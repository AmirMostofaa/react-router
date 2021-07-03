import Home from './components/Home/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import NotFound from './NotFound/NotFound';
import TeamDetail from './components/TeamDetail/TeamDetail';

function App() {
  return (
    <div>
      <Router>
        <Switch>

          <Route exact path="/">
            <Home/>
          </Route>

          <Route path="/home">
            <Home/>
          </Route>

          <Route path="/team/:teamId">
            <TeamDetail/>
          </Route>

          <Route path="*">
            <NotFound/>
          </Route>


        </Switch>
      </Router>
      
         
      
     
    </div>
  );
}

export default App;
