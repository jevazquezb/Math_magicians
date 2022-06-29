import React from 'react';
import CalcUI from './components/Calculator';

class App extends React.PureComponent {
  render() {
    return (
      <div className="app">
        <h1 className="title">Calculator</h1>
        <CalcUI />
      </div>
    );
  }
}

export default App;
