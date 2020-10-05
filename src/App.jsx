import React from 'react';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      query: '',
    };
  };

  search = () => {
    console.log('this.state', this.state);
  };

  render() {
    return (
      <div className='App'>
        <div className='App-title'>Music Master</div>
        <div>
          <input
            type='text'
            placeholder='Search for Artist'
            value={this.state.query}
            onChange={(event) => {this.setState({query: event.target.value})}}
            onKeyPress={(event) => {
              if (event.key === 'Enter') {
                this.search();
              }
            }}
            style={{color: "black"}}
            />
          <button
            type='button'
            className="glyphicon glyphicon-search"
            onClick={this.search}
            style={{color: "black"}}/>
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