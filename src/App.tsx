import * as React from 'react';
import Counter from "Component/Counter"
import './App.css';


class App extends React.Component  {
  render () {
    return (
      <div className="App">
        <Counter name="计时数字"/>
      </div>
    );
  }
  
}
export default App;
