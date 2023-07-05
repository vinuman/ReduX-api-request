import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchProducts } from "../redux/actions/productAction.js";

const Home = () => {
  const { loading, products, error } = useSelector((state) => state.product);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  return (
    <>
      <div className="product-list">
        {products.length > 0 &&
          products.map((product) => (
            <div className="product" key={product.id}>
              <img alt={product.title} src={product.thumbnail}></img>
              <h1>{product.title}</h1>
              <h2>{product.brand}</h2>
              <p> {product.description}</p>
              <p> {product.price}</p>
              <button>Add to cart</button>
            </div>
          ))}
      </div>
    </>
  );
};

export default Home;
