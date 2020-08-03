import React from 'react';
import cia from'./cia.jpg'
import Card from '@material-ui/core/Card';
import GoogleLogin from 'react-google-login';
import Input from '@material-ui/core/Input';

import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import AccountCircle from '@material-ui/icons/AccountCircle';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';


class SimpleCard extends React.Component {
  responseGoogle = (response) => {
    console.log(response);
  }
  render(){
    
  return (
      <div >
          <div style={{float:'left'}}>
    <Card className='root' style={{height:500,width:500,border:5,color:'green' ,boxShadow:'black'}}>
      <CardContent style={{border:'2'}}>
      <img src={cia} style={{width:'450px'}} />
      </CardContent>
      <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions>
      
    </Card>
    </div>
    <div style={{float:'right'}}>
    <Card className='root' style={{height:500,width:300,marginRight:'100px' ,allignContent:'center',border:"10px",color:'green' ,boxShadow:'black'}}>
      <FormControl style={{allignItem:'center'}}>
        <GoogleLogin
       
    clientId="1017129316693-1a4ue8i6qvh9it78la0jp72b7137tpvk.apps.googleusercontent.com"    
    buttonText="Login"
    onSuccess={this.responseGoogle}
    onFailure={this.responseGoogle}
    cookiePolicy={'single_host_origin'}
  />
      
      </FormControl>
 
    </Card>
    </div>
    </div>
  );
  }
 }

export default SimpleCard;