import React from 'react';
import Course from './component/course'
import './App.css';
import About from './component/about'
import { BrowserRouter as Router, Switch, Route,Link } from 'react-router-dom';
import ButtonAppBar from './component/Main';
import SimpleCard from './component/Login';
import Home from './component/Home';



class App extends React.Component {
  render() {
    return (
      <>
        <Router>
       
          <Switch>

            <Route exact path="/" component={Home} />
            <Route exact path="/course" component={Course} />
            <Route exact path="/about" component={About} />
          </Switch>

        </Router>
      </>

    );
  }
}

export default App;
