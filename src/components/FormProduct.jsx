import { useForm } from "react-hook-form";
import { useEffect } from "react";

const FormProduct = ({
  createProducData,
  productSelectedData,
  updateProduct,
}) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const getFormData = (data) => {
    if (productSelectedData) {
      updateProduct(data);
    } else {
      createProducData(data);
      resetForm();
    }
  };

  useEffect(() => {
    if (productSelectedData !== null) {
      reset(productSelectedData);
    } else {
      resetForm();
    }
  }, [productSelectedData]);

  const resetForm = () => {
    reset({
      name: "",
      category: "",
      price: "",
      isAvailable: false,
    });
  };

  return (
    <div className="products_form">
      <form onSubmit={handleSubmit(getFormData)}>
        <div className="input_wrapper">
          <label htmlFor="product_name">Nombre</label>
          <input type="text" id="product_name" {...register("name")} />
        </div>
        <div className="input_wrapper">
          <label htmlFor="product_category">Categoria</label>
          <input type="text" id="product_category" {...register("category")} />
        </div>
        <div className="input_wrapper">
          <label htmlFor="product_price">Precio</label>
          <input type="number" id="product_price" {...register("price")} />
        </div>
        <div className="input_wrapper">
          <label htmlFor="product_isAvailable">Disponible</label>
          <input
            type="checkbox"
            id="product_isAvailable"
            {...register("isAvailable")}
          />
        </div>
        <button className="btn_create" type="submit">
          Crear
        </button>
      </form>
    </div>
  );
};

export default FormProduct;
