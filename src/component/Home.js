import React from 'react';

import Course from './course'

import {BrowserRouter as Router , Switch,Route} from 'react-router-dom';
import ButtonAppBar from './Main';
import SimpleCard from './Login';



class App extends React.Component {
  render(){
  return (
   
     <>
    <ButtonAppBar/>
    
    <SimpleCard/>
    
   </>
  
  );
  }
}

export default App;
