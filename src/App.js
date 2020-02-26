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
      data: [],
      filteredData: [],
    };
  }

  handleSearch = (search) => {
    const normalizedSearch = search.toLowerCase();
    const { data } = this.state;
    const filteredData = search ===  "" ? data : data.filter((data) =>
      data.name.toLowerCase().includes(normalizedSearch) || data.categories.toLowerCase().includes(normalizedSearch)
    );
    this.setState({ filteredData });
  };

  render(){
    const {filteredData} = this.state;

    return (
      <div className="flex-container">
        <NavCategory/>
        <section className="apps-list">
          <SearchInput onChange={this.handleSearch}/>
          {filteredData.map((data) => (
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
