import React, { useState } from 'react';
import Navbar from "../components/Navbar";
import Card from "../components/Card";
import cardData from "../local-json/data.json";
import "../styles/index.css";
import Footer from "../components/Footer";

const Communities = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const cardsPerPage = 6;

  
  const indexOfLastCard = currentPage * cardsPerPage;
  const indexOfFirstCard = indexOfLastCard - cardsPerPage;
  const currentCards = cardData.cards.slice(indexOfFirstCard, indexOfLastCard);

  const goToPreviousPage = () => {
    setCurrentPage((prevPage) => prevPage - 1);
  };

  // Handle next page click
  const goToNextPage = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  return (
    <>
      <Navbar />
      <div className="card">
        <h1>Communities List</h1>
        <div className="card-container">
          {currentCards.map((item, index) => (
            <Card
              key={index}
              name={item.name}
              cardImg={item.image}
              description={item.description}
              status={item.status}
              statusIcon={item.statusImg}
            />
          ))}
        </div>
        <div className="pagination">
          <button onClick={goToPreviousPage} disabled={currentPage === 1}>
          <img width="25" height="25" src="https://img.icons8.com/ios-filled/50/FFFFFF/double-left.png" alt="double-left"/>
          </button>
          <button onClick={goToNextPage} disabled={indexOfLastCard >= cardData.cards.length}>
          <img width="25" height="25" src="https://img.icons8.com/ios-filled/50/FFFFFF/double-right.png" alt="double-right"/>
          </button>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Communities;