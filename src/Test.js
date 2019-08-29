import React from 'react';
import './Test.css'

const Test = ({test, deleteTest}) => {
// const Test = (props) => {
	// const {test} = props;
	// const testList = test.map(test => {
	// 	if (test.age > 20){
	// 		return(
	// 			<div className="test" key={test.id}>
	// 				<div>Name: {test.name}</div>
	// 				<div>Age: {test.age}</div>
	// 				<div>About: {test.about}</div>
	// 			</div>
	// 		)
	// 	}else{
	// 		return false;
	// 	}
	// })

	const testList = test.map(test => {
		return test.age > 20 ? (
			<div className='test' key={test.id}>
				<div>Name: {test.name}</div>
				<div>Age: {test.age}</div>
				<div>About: {test.about}</div>
				<button onClick={() => {deleteTest(test.id)}}>Delete Test</button>
			</div>
		) : null;
	})
	return(
		<div className="test-list">
			{ testList }
		</div>	
	)
}

export default Test;

