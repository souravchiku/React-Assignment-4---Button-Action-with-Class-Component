import React, {Component, useState} from "react";
import '../styles/App.css';

class App extends Component {
    constructor(props) {
		super(props);
		this.state={
			data:false,
		}
		this.fun=this.fun.bind(this)
	};
	
	fun(){
		this.setState({
			data:true,
		})
	}

    render() {
    	return(
    		<div id="main">
				{ /* Do not remove this main div!! */ }
				
				<button id="click" onClick={this.fun}>
					Button</button>

					 { 
					
					this.state.data &&<p id="para">Hello, I've learnt to use the full-stack evaluation tool. This makes me so happy</p>
					
					}
    		</div>
    	);
    }
}


export default App;
