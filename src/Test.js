import React from 'react';

const Test = ({test}) => {
// const Test = (props) => {
	// const {test} = props;
	const testList = test.map(test => {
		if (test.age > 20){
			return(
				<div className="test" key={test.id}>
					<div>Name: {test.name}</div>
					<div>Age: {test.age}</div>
					<div>About: {test.about}</div>
				</div>
			)
		}else{
			return false;
		}
	})
	return(
		<div className="test-list">
			{ testList }
		</div>	
	)
}

export default Test;

