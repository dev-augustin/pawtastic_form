import React from 'react';
import './App.css';
import Header from  './components/Header';
import Content from './components/Content';
import Nav from './components/Nav';

class App extends React.Component {
  render(){
    return (
      <React.Fragment>
        <div className="App">
          
          <div className='div1'>
          <Header/>
          <Content/>
          </div>
          <div className='div2'>
          <Nav/>
          </div>
          
   
      </div>
      </React.Fragment>
      
    );
    
  }
}

export default App;
