import './App.css';
import React, {Component} from 'react';
import Loader from './Loader';
import Data from './Data';
import 'bootstrap/dist/css/bootstrap.min.css';
import  './App.css';


class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      clicked:false,
      firstfetched:false,
      loading1:true,
      loading2:true,
      url:'https://reqres.in/api/users?page=',
      userData1:null,
      userData2:null,
    }
  }
  
  async fetchFunction(){
    this.setState({clicked:true});
    let response1 = await fetch(this.state.url+1);
    let data1 = await response1.json();
    setTimeout(() => {
      this.setState({userData1:data1.data,loading1:false,firstfetched:true});
      console.log('helllo1')
    }, 1000);

   
  }

  show1(){
    if(this.state.clicked){
      if(this.state.loading1 === true){
        return(
          <Loader/>
        );
      }
      else{
        if(this.state.userData1 === null){
          alert('data not recieved yet')
        }else{
          return(
          <Data usrData={this.state.userData1}/>);
        }
      }
    }
  }

  show2(){
    if(this.state.firstfetched){
      if(this.state.loading2 === true){
        return(
          
          <Loader/>
        );
      }
      else{
        if(this.state.userData2 === null){
          alert('data not recieved yet')
        }else{
          return(
          <Data usrData={this.state.userData2}/>);
        }
      }
    }
  }
  render(){
    return (
      <React.Fragment>
      <div style={{
        'display':'flex',
        'justifyContent':'space-between',
      }} >
      <div style={{
       
        'padding':'10px 20px',
        'textAlign':'center',
      }}>
        <button  className="btn btn-danger"> CLIENT'S NAME</button>
      </div>

      <div style={{
        
        'padding':'10px 20px',
        'textAlign':'center',
      }}>
        <button  className="btn btn-danger text-center " onClick={()=>this.fetchFunction()} >Get Users</button>
      </div>
      </div>
      

      
      {this.show1()}
      {this.show2()}
      </React.Fragment>
    );
  }
}

export default App;
