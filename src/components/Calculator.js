import React, { useState } from 'react';
import calculate from '../logic/calculate';

function CalcUI() {
  const [stateObj, setStateObj] = useState({
    total: null,
    next: null,
    operation: null,
  });

  const updateState = (e) => {
    const key = e.target.textContent;
    setStateObj((state) => calculate(state, key));
  };

  const display = (obj) => obj.next || obj.total || 0;

  const createDigits = () => {
    const numsOps = [
      'AC', '+/\u2212', '%', '\xF7',
      7, 8, 9, '\xD7',
      4, 5, 6, '\u2212',
      1, 2, 3, '+',
      0, '.', '=',
    ];
    const digits = [];
    let classes = '';
    for (let i = 0; i < numsOps.length; i += 1) {
      if ((i + 1) % 4 === 0 || numsOps[i] === '=') {
        classes = 'btn op';
      } else if (numsOps[i] === 0) {
        classes = 'btn zero';
      } else {
        classes = 'btn';
      }
      digits.push(
        <button className={classes} onClick={updateState} type="button" key={numsOps[i]}>{numsOps[i]}</button>,
      );
    }
    return digits;
  };

  return (
    <div className="calc-cont">
      <div className="calc-disp">{ display(stateObj) }</div>
      <div className="btn-cont">
        { createDigits() }
      </div>
    </div>
  );
}

export default CalcUI;
