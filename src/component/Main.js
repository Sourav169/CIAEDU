import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import './Main.css'
import {Link,BrowserRouter as Router , Switch,Route} from 'react-router-dom'

import Course from './course';

import heading from './heading.jpg';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';


 class ButtonAppBar extends React.Component {
  render(){
  return (
    <div className='root'>
      <AppBar  className="App" position="sticky" style={{backgroundColor:"green"} } >
        <Toolbar>
       
          <Typography variant="h6" className='title'>
         
           <h1>CIA</h1>
          
          </Typography>
          <Typography variant="h6" style={{marginLeft:"200px" ,}}>
         
            <h5>HOME</h5>
            

          </Typography>
          <Typography variant="h6" style={{marginLeft:"50px" ,}}>
          <Link style={{color:"white"}} to='/course'> 
            <h5 >Course</h5>
            </Link>
           
            
          </Typography>
          <Typography variant="h6" style={{marginLeft:"50px" ,}}>
          <Link style={{color:"white"}} to='/about'> 
            <h5>About</h5>
            </Link>

          </Typography>
          <Typography variant="h6" style={{marginLeft:"50px" ,}}>
            <h5>Contact</h5>

          </Typography>
          <Button  style={{backgroundColor:"green" ,color:"white" ,marginLeft:"300px"}}>Login</Button>
        </Toolbar>
      </AppBar>
    </div>
  );
  }
}
export default ButtonAppBar;