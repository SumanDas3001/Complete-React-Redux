import React, { Component } from 'react';
import Test from './Test';
import AddTest from './AddTest';

class App extends Component {
  state = {
    test: [
      {name: "suman", age: 13, about: "nothing", id:1},
      {name: "rahul", age: 24, about: "nothing", id:2},
      {name: "subha", age: 25, about: "nothing", id:3}
    ]
  }

  testAdd = (testValue) => {
    testValue.id = Math.random();
    let tests = [...this.state.test, testValue]
    this.setState({
      test: tests
    })
    // console.log(test);
  }
  
  render(){
    return (
      <div className="App">
        <Test test={this.state.test}/>
        <AddTest testAdd={this.testAdd} />
      </div>
    );
  }
}

export default App;


