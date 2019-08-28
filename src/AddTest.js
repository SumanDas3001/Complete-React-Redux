import React, {Component} from 'react'

class AddTest extends Component {
	state = {
		name: null,
		age: null,
		about: null
	}

	handleChange = (e) => {
		this.setState({
			[e.target.id]: e.target.value  
		})
	}

	handleSubmit = (e) =>{
		e.preventDefault();
		this.props.testAdd(this.state);
	}

	render(){
		return(
			<div>
				<form onSubmit={this.handleSubmit}>
					<label htmlFor="name">Name</label>
					<input type="text" id="name" onChange={this.handleChange}/>
					<label htmlFor="name">Age</label>
					<input type="text" id="age" onChange={this.handleChange}/>
					<label htmlFor="name">About</label>
					<input type="text" id="about" onChange={this.handleChange}/>
					<button>Submit</button>
				</form>
			</div>
		)
	}
}

export default AddTest;