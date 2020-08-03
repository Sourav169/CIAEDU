import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';



class About extends React.Component{
  constructor(props){
    super(props);
  }
    render(){
        return(
            <AppBar  className="App" position="sticky" style={{backgroundColor:"green" } } >

<Typography variant="h6" style={{alignItems:"center"}}>
         <h1>About</h1>
         </Typography>
          </AppBar>
           
        );
    }
}
export default About;