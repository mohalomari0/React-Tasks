import React from 'react';

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function StaticCards() {
  const evenNumbers = numbers.filter(function(num) {
    return num % 2 === 0;
  });

  const oddNumbers = numbers.filter(function(num) {
    return num % 2 !== 0;
  });

  return (
    <div>
        <h1>Twelve<span style={{fontSize:"10px"}}>th12</span> Task</h1>
    <div>
      <h2>Even Numbers</h2>
      <div className="cards-container">
        {evenNumbers.map(function(num) {
          return (
            <div key={num} className="card">
              <h3>Even Number</h3>
              <p>{num}</p>
            </div>
          );
        })}
      </div>

      <h2>Odd Numbers</h2>
      <div className="cards-container">
        {oddNumbers.map(function(num) {
          return (
            <div key={num} className="card">
              <h3>Odd Number</h3>
              <p>{num}</p>
            </div>
          );
        })}
      </div>
    </div>
    </div>
  );
}

export default StaticCards;