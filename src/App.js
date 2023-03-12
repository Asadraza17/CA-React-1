import React from 'react';
import { users } from './user_info';
import User from './components/User';

function App() {
  return (
    <div className="App">
      <div className="users-container">
      {users.map(user => (
        <>
          <User user={user} />        
        </>
      ))}
      </div>
    </div>
  );
}

export default App;