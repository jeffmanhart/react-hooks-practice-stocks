import React, { useEffect, useState } from "react";
import StockContainer from "./StockContainer";
import PortfolioContainer from "./PortfolioContainer";
import SearchBar from "./SearchBar";

function MainContainer() {
  const [stocks , setStocks] = useState([])
  const [portfolio, setPortfolio] = useState([])
  const [selectedFilter, setSelectedFilter] = useState("All");
  const [sort, setSort]= useState("")

  useEffect(()=>{
    fetch(" http://localhost:3001/stocks")
    .then((r) => r.json())
    .then((data)=> setStocks(data));
  }, [])

  function handlePurchaseStock(stockRecord){
    const portfolioItems = [...portfolio , stockRecord]
    setPortfolio(portfolioItems)
  }

  function handleStockSale(stockId){
    const portfolioItems = portfolio.filter((p)=>p.id !== stockId)
    setPortfolio(portfolioItems)
  }

  function handleFilterChange(event) {
    setSelectedFilter(event.target.value);
  }

  function handleSort(sort){
    setSort(sort)
  }
 
  const stocksToDisplay = stocks.sort((a,b)=>{
    if (sort === "Alphabetically") {
     return (a.name > b.name) ? 1 : ((b.name > a.name) ? -1 : 0)
     }else if (sort === "Price") {return (a.price > b.price) ? 1 : ((b.price > a.price) ? -1 : 0)}
 }).filter((stock) => selectedFilter === "All" || stock.type === selectedFilter)
  
  return (
    <div>
      <SearchBar onFilterChage={handleFilterChange} onSortBy={handleSort}/>
      <div className="row">
        <div className="col-8">
          <StockContainer stocks={stocksToDisplay} onStockClick={handlePurchaseStock}/>
        </div>
        <div className="col-4">
          <PortfolioContainer portfolio={portfolio} onStockSale={handleStockSale}/>
        </div>
      </div>
    </div>
  );
}

export default MainContainer;
