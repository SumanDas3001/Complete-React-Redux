import React, { Component } from 'react';
import Test from './Test';

class App extends Component {
  state = {
    test: [
      {name: "suman", age: 23, about: "nothing", id:1},
      {name: "rahul", age: 24, about: "nothing", id:2},
      {name: "subha", age: 25, about: "nothing", id:3}
    ]
  }
  render(){
    return (
      <div className="App">
        <Test test={this.state.test}/>
      </div>
    );
  }
}

export default App;


