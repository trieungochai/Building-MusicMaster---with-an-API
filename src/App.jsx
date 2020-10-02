import React from 'react';
import './App.css';

class App extends React.Component {
  render() {
    return (
      <div className='App'>
        <div className='App-title'>Music Master</div>
        <div>
          <input placeholder='Search for Artist'/>
          <button type='button' className="glyphicon glyphicon-search"/>
        </div>
        <div className='Profile'>
          <div>Artist Picture</div>
          <div>Artist Name</div>
        </div>
        <div className='Gallery'>
          Gallery
        </div>
      </div>
    );
  };
};

export default App;