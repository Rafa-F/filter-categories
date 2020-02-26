import React, {Component} from 'react';
import './App.css';
import data from './data';
import {Card} from "./components/Card";
import {NavCategory} from "./components/NavCategory";
import {SearchInput} from "./components/SearchInput";
import {Pagination} from "./components/Pagination";

class App extends Component {
  constructor() {
    super();
    this.state = {
      data: []
    };
  }

  render(){
    return (
      <div className="flex-container">
        <NavCategory/>
        <section className="apps-list">
          <SearchInput/>
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
          <Pagination/>
        </section>
      </div>
    );
  }
}

export default App;
