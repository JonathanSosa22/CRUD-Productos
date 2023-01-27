const ProductList = ({ products, deleteProduct, selectProduct }) => {
  return (
    <ul className="container_list">
      {products?.map((productElement, index) => (
        <li className="products_list" key={`user-${index}`}>
          <h3>
            <span>Nombre: </span> {productElement.name}
          </h3>
          <h3>
            <span>Categoria: </span> {productElement.category}
          </h3>
          <h3>
            <span>Precio: </span> ${productElement.price}
          </h3>
          <h3>
            <span>isAvailable:</span> {productElement.isAvailable.toString()}
          </h3>
          <br />
          <button
            className="btn"
            onClick={() => deleteProduct(productElement.id)}
          >
            Eliminar
          </button>
          <button className="btn" onClick={() => selectProduct(productElement)}>
            Seleccionar
          </button>
        </li>
      ))}
    </ul>
  );
};

export default ProductList;
