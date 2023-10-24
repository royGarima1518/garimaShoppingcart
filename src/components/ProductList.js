import "../App.css";
import React, { useState } from "react";
import SearchBar from "./search";


function ProductList({ product, addToCart }) {
  const [filteredProducts, setFilteredProducts] = useState(product);

  const handleSearch = (searchTerm) => {
    const filtered = product.filter(item =>
      item.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredProducts(filtered);
  };

  return (
    <div className="flex">
      <SearchBar onSearch={handleSearch} /> {/* Render the SearchBar component */}
      {filteredProducts.map((productItem, productIndex) => {
        return (
          <div style={{ width: "15%" }} key={productIndex}>
            <div className="product-item">
              <img src={productItem.url} alt={productItem.name} width="100%" />
              <p>
                {productItem.name} | {productItem.category}
              </p>
              <p> {productItem.seller}</p>
              <p> Rs. {productItem.price} /-</p>
              <button onClick={() => addToCart(productItem)}>Add To Cart</button>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default ProductList;
