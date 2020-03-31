import React from 'react';

class Content extends React.Component{
   constructor(props){
       super(props);
       this.state={value: ''};

       this.handleChange = this.handleChange.bind(this);
       this.handleSubmit=this.handleSubmit.bind(this);
   }
     handleChange(event){
         alert('A name was submitted: '+this.state.value);
         event.preventDefault();
     }

     handleSubmit(event){
         alert('A name was submitted: '+ this.state.value);
         event.preventDefault();
     }
    render(){  
        return(
            // <React.Fragment>
            //      <div className="title"> 
            //   Name<input type='text' id='name'></input>
            //   <img src="" alt="camera"/>Upload Photo<br/>
            //   <input type='checkbox' id="toggle" className= 'checkbox'/>
            //   <label for='toggle' class='switch'></label>            </div>
            // </React.Fragment>
            <form onSubmit={this.handleSubmit}>
                 <label>
                     Name:
                     <input type="text" value={this.state.value} onChange={this.handleChange}/>
                 </label>
                 <br/>
                 <label>
                     Breed:
                     <input type="text" value={this.state.value} onChange={this.handleChange}/>
                 </label>
                 <label>
                     Birthday:
                     <input type="text" value={this.state.value} onChange={this.handleChange}/>
                 </label>  
                 <br/>
                 <input type="Submit" value="Submit" />
            </form>
           
        );
    }

}

export default Content;