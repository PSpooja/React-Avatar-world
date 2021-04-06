import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './Demo.css';

const Demo = ({name}) => {
    return(
        <div className="background_change">
        <h1>Hello {name}.</h1>
       <p>currently i am learning react</p>
    </div>
    ) 
}

// class Demo extends Component{
//     render(){
//         return(
//             <div className="background_change">
//             <h1>Hello {this.props.name}.</h1>
//            <p>currently i am learning react</p>
//         </div>
//         ) 
        
//     }
// }

export default Demo;