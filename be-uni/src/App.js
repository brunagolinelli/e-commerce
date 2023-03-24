import React, { useCallback, useEffect, useState } from "react";
import Filter from "./components/Filters/Filters";
import ProductsCard from "../src/components/CardProductus/card-products";
import { fetchProducts } from "./api/productApi";
import RecipeListContainer from "./styled"

function App() {
  const [maxFilter, setMaxFilter] = useState(10000);
  const [minFilter, setMinFilter] = useState(0);
  const [search, setSearch] = useState("");
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  async function fetch() {
    fetchProducts()
      .then((data) => {
        setProducts(data);
        setFilteredProducts(data);
      })
      .finally(() => {
        setLoading(false);
      });
  }

  useEffect(() => {
    fetch();
  }, []);

  const filter = useCallback(() => {
    const filtered = products.filter((p) => {
      return (
        (search ? p.name.toLowerCase().includes(search.toLowerCase()) : true) &&
        p.price >= minFilter &&
        p.price <= maxFilter
      );
    });
    setFilteredProducts(filtered);
  }, [maxFilter, minFilter, products, search]);

  useEffect(() => {
    filter();
  }, [filter]);

  function onChangeMinPrice(e) {
    setMinFilter(e.target.value);
  }

  function onChangeMaxPrice(e) {
    setMaxFilter(e.target.value);
  }

  function onChangeSearch(e) {
    setSearch(e.target.value);
  }

  const renderComponent = (name, price, image, description, total_stock, id) => {
    return (
      <div>
        <ProductsCard key={id} title={name} image={image} price={price} description={description} total_stock={total_stock}
        />
      </div>
    )
  };

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
      <RecipeListContainer >
        {loading ? (
          <div>
            <h1>Carregando...</h1>
          </div >
        ) : filteredProducts.length > 0 ? (
          filteredProducts.map((p) => renderComponent(p.name, p.price, p.image, p.description, p.total_stock, p.id))
        ) : (
          <h2>Não encontramos nenhum produto com essa descrição 🚫 </h2>
        )}
      </RecipeListContainer>
    </div>
  );
}

export default App;
