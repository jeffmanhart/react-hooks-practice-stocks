import React from "react";

function Stock({stockRecord, onStockClick, onStockSale, origin}) {
  const {id, ticker, name, type, price} = stockRecord


  function handleClick(){
    console.log(origin)
    if(origin==="stocks")
      {onStockClick(stockRecord)
      }else if(origin==="portfolio"){
        onStockSale(stockRecord.id)
      }

  }

  return (
    <div key={id}>
      <div className="card" type={type} onClick={handleClick}>
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
          <p className="card-text">{ticker}: {price}</p>
        </div>
      </div>
    </div>
  );
}
export default Stock;
