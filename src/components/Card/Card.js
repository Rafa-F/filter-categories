import React from "react";

const Card = ({ name, description, categories, subscriptions }) => (
  <ul>
    <li>
      <div className="app-item">
        <div className="box-info">
          <div className="box-info--content">
            <div className="description">
              <h1>{name}</h1>
              <p>{description}</p>
            </div>
            <div className="tags">
              {categories.map((category) => (
                <>
                <span>{category}</span> /
                </>
              ))}
            </div>
          </div>
          <div className="box-info--footer">
            {subscriptions.map((item) => (
              <ul>
                <li><span>{item.name}</span> <h3>{item.price}<sup>€</sup></h3></li>
              </ul>
            ))}
          </div>
        </div>
      </div>
    </li>
  </ul>
);

export default Card;
