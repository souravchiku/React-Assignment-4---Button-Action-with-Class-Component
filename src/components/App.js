import React, {Component, useState} from "react";
import '../styles/App.css';

class App extends Component {
    constructor(props) {
		super(props);
		this.state={
			data:"",
		}
	};
	

    render() {
    	return(
    		<div id="main">
				{ /* Do not remove this main div!! */ }
				<p id="para"> {this.state.data}</p>
				<button id="click" onClick={()=>this.setState({data:"Hello, I've learnt to use the full-stack evaluation tool. This makes me so happy"})}>
					Update</button>
    		</div>
    	);
    }
}


export default App;

