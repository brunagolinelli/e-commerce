import React, {useState} from "react";
import Filter from "./components/Filters/Filters";
import { produtos } from "./prodcts";

 function App() {
  // const state = await axios.get('https://api.beuni.com.br/atlas/brands/v2/products?q=&category=&min=0&max=99999&sortBy=featured&page=1&perPage=50')

  const [maxFilter, setMaxFilter] = useState(10000);
  const [minFilter, setMinFilter] = useState(0)
  const [search, setSearch] = useState('')

  function onChangeSearch (e) {
    setSearch (e.target.value)
  }

  function onChangeMinPrice (e) {
    setMinFilter (e.target.value)
  } 

  function onChangeMaxPrice (e) {
    setMaxFilter(e.target.valeu)
  }
  
  const filterMin =  produtos.filter(produto => {
    if(maxFilter){
      return produto.price <= maxFilter
    }
  }
  )

  console.log(filterMin)

  return (
    <div>
      <Filter
      minPrice={minFilter}
      maxPrice={maxFilter}
      busca={search}
      onChangeMaxPrice={onChangeMaxPrice}
      onChangeMinPrice={onChangeMinPrice}
      onChangeSearch={onChangeSearch}/>
    </div>
  );
}

export default App;
