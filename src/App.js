import React from 'react';
import { Routes, Route } from 'react-router-dom';
import {
  Header,
  Home,
  CalcSec,
  Quote,
} from './sections/sections';

class App extends React.PureComponent {
  render() {
    return (
      <>
        <Header />
        <div className="sec-cont">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/calculator" element={<CalcSec />} />
            <Route path="/quote" element={<Quote />} />
          </Routes>
        </div>
      </>
    );
  }
}

export default App;
