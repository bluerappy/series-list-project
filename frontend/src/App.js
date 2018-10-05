import React, { Component } from 'react';
import './App.css';
import io from 'socket.io-client';
import feathers from '@feathersjs/client';
import SeriesList from './components/seriesList';
import SeriesAddForm from './components/seriesAddForm'

const socket = io('http://127.0.0.1:3030');
export const app = feathers();

app.configure(feathers.socketio(socket));
app.configure(feathers.authentication({
  storage: localStorage,
}));


class App extends Component {
  state = {
    auth: false,
  }

componentWillMount() {   
  app.authenticate({email:'cedric.seng@gmail.com', password:'secret', strategy:'local'})
    .then(() => {this.setState({auth:true})})
    .catch(console.error)
}

  render() {
    if (!this.state.auth) {
      return null
    }

    return (
      <div className="App">
        <p>FEATHERS</p>
        <SeriesAddForm/>
        <SeriesList/>
      </div>
    );
  }
}

export default App;
