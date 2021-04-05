import React, {Component, useState} from "react";
import '../styles/App.css';

class App extends Component {
    constructor(props) {
		super(props);
		this.state={
			data:false,
		}
	};
	

    render() {
    	return(
    		<div id="main">
				{ /* Do not remove this main div!! */ }
				
				<button id="click" onClick={()=>this.setState({data:true})}>
					Button</button>

					<p id="para"> { 
					
					(this.state.data)&&<p>Hello, I've learnt to use the full-stack evaluation tool. This makes me so happy</p>
					
					}</p>
    		</div>
    	);
    }
}


export default App;
