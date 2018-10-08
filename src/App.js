import React from 'react';
import CardList from './CardList';
import { persons } from './persons';

const App = () => {
  return (
    <div>
      <h1>Star Wars</h1>
      <CardList persons={persons}/>
    </div>
  );
}

export default App;
