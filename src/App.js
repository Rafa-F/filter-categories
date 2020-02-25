import React, {Component} from 'react';
import './App.css';
import data from './data';
import {Card} from "./components/Card";

class App extends Component {
  constructor() {
    super();
    this.state = {
      data: []
    };
  }

  render(){
    return (
      <div className="App">
          {data.map((data) => (
            <Card
              key={data.id}
              id={data.id}
              name={data.name}
              description={data.description}
              categories={data.categories}
              subscriptions={data.subscriptions}
            />
          ))}
      </div>
    );
  }
}

export default App;
