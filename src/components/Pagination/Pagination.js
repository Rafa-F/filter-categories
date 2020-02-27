import React from "react";


const Pagination = ({cardsPerPage, totalCards, paginate}) => {

  const pageNumbers = [];

  for(let i = 1; i <= Math.ceil(totalCards / cardsPerPage); i++) {
    pageNumbers.push(i);
  }

  return(
    <ul className="pagination">
      {pageNumbers.map(number => {

        return(
          <li key={number}>
            <a onClick={() => paginate(number)} href="#">
              {number}
            </a>
          </li>
        )

      })}

      {/*
      <li><a href="#">1</a></li>
      <li className="active"><a href="#">2</a></li>
      <li><a href="#">3</a></li>
      <li><a href="#">&gt;</a></li>
      */}
    </ul>
  )

};

export default Pagination;
