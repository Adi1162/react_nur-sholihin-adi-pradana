import React, { useState } from "react";

function CreateProduct() {
  const [product, setProduct] = useState({
    name: "",
    description: "",
    price: "",
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(product);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setProduct((prevProduct) => ({
      ...prevProduct,
      [name]: value,
    }));
  };

  const handleClick = () => {
    const randomNumber = Math.floor(Math.random() * 100);
    console.log(`Random Number: ${randomNumber}`);
  };

  return (
    <div className="create-product-container">
      <h1>Create Product</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={product.name}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="description">Description:</label>
          <textarea
            id="description"
            name="description"
            value={product.description}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="price">Price:</label>
          <input
            type="number"
            id="price"
            name="price"
            value={product.price}
            onChange={handleChange}
          />
        </div>
        <button type="submit">Submit</button>
        <button onClick={handleClick}>Random Number</button>
      </form>
    </div>
  );
}

export default CreateProduct;
