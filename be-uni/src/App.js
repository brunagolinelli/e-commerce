import React, { useEffect, useState } from "react";
import Filter from "./components/Filters/Filters";
import { produtos } from "./produtos";

function App() {
  const [maxFilter, setMaxFilter] = useState(100000);
  const [minFilter, setMinFilter] = useState(0)
  const [search, setSearch] = useState('')
  const [filteredProducts, setFilteredProducts] = useState(produtos);

  useEffect(() => {
    filter();
  }, [search, minFilter, maxFilter])

  function filter() {
    const filtered = produtos.filter((p) => {
      return ((search ? p.name === search : true) && p.price >= minFilter && p.price <= maxFilter)
    })
    setFilteredProducts(filtered);
  }

  function onChangeMinPrice(e) {
    setMinFilter(e.target.value)
  }

  function onChangeMaxPrice(e) {
    setMaxFilter(e.target.value)
  }

  function onChangeSearch(e) {
    setSearch(e.target.value);
  }

  const renderComponent = (name, price, img) => {
    return (
      
      <div style={{display: "flex", flexDirection: "row", padding: 10, alignItems: "center", justifyContent: "center", flex: 1}} key={name}>        
        <img src={img[0].url} width={150} height={150} style={{filter: "drop-shadow(1px 1px 8px red)"}}/>
        <h1>Nome: {name} Preço: {price}</h1>
      </div>
    )
  }

  return (
    <div>
      <Filter
        minPrice={minFilter}
        maxPrice={maxFilter}
        busca={search}
        onChangeMaxPrice={onChangeMaxPrice}
        onChangeMinPrice={onChangeMinPrice}
        onChangeSearch={onChangeSearch}
      />
      
      {filteredProducts.length > 0 ? filteredProducts.map((p) => (
        renderComponent(p.name, p.price, p.image)
      )) : <h1>Busca não encontrada 😢 </h1>}

    </div>
  );
}

export default App;
