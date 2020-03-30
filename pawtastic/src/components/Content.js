import React from 'react';

class Content extends React.Component{
//    constructor(props){
//        super(props);
//        this.state={value: ''};

//        this.handleChange = this.handleChange.bind(this);
//        this.handleSubmit=this.handleSubmit.bind(this);
//    }

    render(){  
        return(
            <React.Fragment>
                 <div className="title">
                
              Name<input type='text' id='name'></input>
              <img src="" alt="camera"/>Upload Photo<br/>
              <input type='checkbox' id="toggle" className= 'checkbox'/>
              <label for='toggle' class='switch'></label>
            
            
            
            </div>
            </React.Fragment>
           
        );
    }

}

export default Content;