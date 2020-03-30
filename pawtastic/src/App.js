import React from 'react';
import './App.css';
import Header from  './components/Header';
import Content from './components/Content';
import Nav from './components/Nav';
import Footer from './components/Footer';

class App extends React.Component {
  render(){
    return (
      <React.Fragment>
        <div className="wrapper">
        <div className="App">
          
  
          <div className='div1'>
          <Nav/>
          </div>
          <div className='div2'>
          <Header/>
          <Content/>
          </div>
          <div className='div3'>
            <Footer/>
          </div>
          
          </div>
      </div>
      </React.Fragment>
      
    );
    
  }
}

export default App;
