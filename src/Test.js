import React from 'react';

const Test = ({test}) => {
// const Test = (props) => {
	// const {test} = props;
	const testList = test.map(test => {
		return(
			<div className="test" key={test.id}>
				<div>Name: {test.name}</div>
				<div>Age: {test.age}</div>
				<div>About: {test.about}</div>
			</div>
		)
	})
	return(
		<div className="test-list">
			{ testList }
		</div>	
	)
}

export default Test;

