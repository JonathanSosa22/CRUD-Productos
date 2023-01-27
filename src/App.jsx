import "./App.css";
import { useState, useEffect } from "react";
import FormProduct from "./components/FormProduct";
import ProductList from "./components/ProductsList";
import axios from "axios";

function App() {
  const [product, setProduct] = useState([]);
  const [productDataUpdate, setProductDataUpdate] = useState(null);

  useEffect(() => {
    axios
      .get("https://products-crud.academlo.tech/products/")
      .then((resp) => setProduct(resp.data))
      .catch((error) => console.error(error));
  }, []);

  const getApiData = () => {
    axios
      .get("https://products-crud.academlo.tech/products/")
      .then((resp) => setProduct(resp.data))
      .catch((error) => console.error(error));
  };

  const addProduct = (data) => {
    axios
      .post("https://products-crud.academlo.tech/products/", data)
      .then(() => getApiData())
      .catch((error) => console.error(error));
  };

  const deleteProduct = (productId) => {
    axios
      .delete(`https://products-crud.academlo.tech/products/${productId}/`)
      .then(() => getApiData())
      .catch((error) => console.error(error));
  };

  const selectProduct = (userData) => {
    setProductDataUpdate(userData);
  };

  const updateProduct = (editedProduct) => {
    const index = product.findIndex((prod) => prod.id === editedProduct.id);

    product[index] = editedProduct;

    setProduct([...product]);
    setProductDataUpdate(null);
  };

  return (
    <div className="App">
      <FormProduct
        createProducData={(data) => addProduct(data)}
        productSelectedData={productDataUpdate}
        updateProduct={updateProduct}
      />
      <ProductList
        products={product}
        deleteProduct={deleteProduct}
        selectProduct={selectProduct}
      />
    </div>
  );
}

export default App;
