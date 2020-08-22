import React from 'react';
import data from '../../copies/facts.json';

const Facts = () => {
  const factItems = data.facts.map((fact) => <li>{fact}</li>);

  return (
    <div className='facts-container'>
      <h1>Fun Facts about Texas</h1>
      <ul>{factItems}</ul>
    </div>
  );
};
export default Facts;
