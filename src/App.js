import React from 'react';
import Test from './Test';
import AddTest from './AddTest';

class App extends React.Component {
  state = {
    test: [
      {name: "suman", age: 13, about: "nothing", id:1},
      {name: "rahul", age: 24, about: "nothing", id:2},
      {name: "subha", age: 25, about: "nothing", id:3}
    ]
  }

  testAdd = (testValue) => {
    testValue.id = Math.random();
    let tests = [...this.state.test, testValue];
    this.setState({
      test: tests
    })
  }

  deleteTest = (id) => {
    let testData = this.state.test.filter( testData => {
      return testData.id !== id;
    });
    this.setState({
      test: testData
    })
    // console.log(id);
  }
  
  render(){
    return (
      <div className="App">
        <Test deleteTest={this.deleteTest} test={this.state.test}/>
        <AddTest testAdd={this.testAdd} />
      </div>
    );
  }
}

export default App;


