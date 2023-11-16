import React from "react";
import Stock from "./Stock";

function PortfolioContainer({portfolio, onStockSale}) {
  return (
    <div>
      <h2>My Portfolio</h2>
      {
        portfolio.map((stock)=> 
        <Stock 
          key={stock.id}
          stockRecord={stock}
          onStockSale={onStockSale}
          origin={"portfolio"}
          />)
      }
    </div>
  );
}

export default PortfolioContainer;
