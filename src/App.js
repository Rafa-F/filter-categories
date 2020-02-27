import React, {useState} from 'react';
import './App.css';
import data from './data';
import {Card} from "./components/Card";
import {NavCategory} from "./components/NavCategory";
import {SearchInput} from "./components/SearchInput";
import {Pagination} from "./components/Pagination";

const App = () => {

  const [currentPage, setCurrentPage] = useState(1);
  const [cardsPerPage] = useState(3);

  // Get current cards
  const indexOfLastCard = currentPage * cardsPerPage;
  const indexOfFirstCard = indexOfLastCard - cardsPerPage;
  const currentCards = data.slice(indexOfFirstCard, indexOfLastCard);

  // Change page
  const paginate = (pageNumber) => (
   setCurrentPage(pageNumber)
  );

  return(
    <div className="flex-container">
      <NavCategory/>
      <section onChange={handleSearch}className="apps-list">
        <SearchInput/>
        {currentCards.map((data) => (
          <Card
            key={data.id}
            id={data.id}
            name={data.name}
            description={data.description}
            categories={data.categories}
            subscriptions={data.subscriptions}
          />
        ))}
        <Pagination
          cardsPerPage={cardsPerPage}
          totalCards={data.length}
          paginate={paginate}
        />
      </section>
    </div>
  );
};

  // Agora aqui vais receber o conteudo da search bar
  handleSearch = (search) => {
    const normalizedSearch = search.toLowerCase();
    const { data } = this.state;
    const filteredData = search ===  "" ? data : data.filter((data) =>
      data.name.toLowerCase().includes(normalizedSearch) || data.categories.toLowerCase().includes(normalizedSearch)
    );
    this.setState({ filteredData });
  };

export default App;
