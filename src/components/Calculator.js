import React from 'react';

class CalcUI extends React.PureComponent {
  createDigits = () => {
    const numsOps = ['AC', '+/\u2212', '%', '\xF7', 7, 8, 9, '\xD7', 4, 5, 6, '\u2212', 1, 2, 3, '+', 0, '.', '='];
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
        <button className={classes} type="button" key={numsOps[i]}>{numsOps[i]}</button>,
      );
    }
    return digits;
  }

  render() {
    return (
      <div className="calc-cont">
        <div className="calc-disp">0</div>
        <div className="btn-cont">
          { this.createDigits() }
        </div>
      </div>
    );
  }
}

export default CalcUI;
