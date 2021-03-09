import React from 'react';
import './App.css';
import { Todos } from './components/Todos'

function App() {
  let state = {
    todos: [
      {
        id: 1,
        title: 'Bitches bumsen',
        completed: false
      },
      {
        id: 2,
        title: 'Hoes bumsen',
        completed: false
      },
      {
        id: 3,
        title: 'Milfs bumsen',
        completed: false
      }
    ]
  }

  return (
    <div className="App">
      <Todos todos={state.todos} />
    </div>
  );
}

export default App;
