import React, { useState } from "react";

function CreateProduct() {
  const [productName, setProductName] = useState("");
  const [productCategory, setProductCategory] = useState("");
  const [productFreshness, setProductFreshness] = useState("");
  const [productPrice, setProductPrice] = useState("");
  const [productList, setProductList] = useState([]);
  const [editingProduct, setEditingProduct] = useState(null);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);

  const handleAddProduct = (event) => {
    event.preventDefault();
    const newProduct = {
      productName,
      productCategory,
      productFreshness,
      productPrice
    };
    setProductList([...productList, newProduct]);
    setProductName("");
    setProductCategory("");
    setProductFreshness("");
    setProductPrice("");
  };

  return (
    <div>
      <form onSubmit={handleAddProduct}>
        <label htmlFor="productName">Product Name:</label>
        <input
          type="text"
          id="productName"
          value={productName}
          onChange={(event) => setProductName(event.target.value)}
        />
        <label htmlFor="productCategory">Product Category:</label>
        <input
          type="text"
          id="productCategory"
          value={productCategory}
          onChange={(event) => setProductCategory(event.target.value)}
        />
        <label htmlFor="productFreshness">Product Freshness:</label>
        <input
          type="text"
          id="productFreshness"
          value={productFreshness}
          onChange={(event) => setProductFreshness(event.target.value)}
        />
        <label htmlFor="productPrice">Product Price:</label>
        <input
          type="text"
          id="productPrice"
          value={productPrice}
          onChange={(event) => setProductPrice(event.target.value)}
        />
        <button type="submit">Add Product</button>
      </form>
      <table>
        <thead>
          <tr>
            <th>No</th>
            <th>Product Name</th>
            <th>Product Category</th>
            <th>Product Freshness</th>
            <th>Product Price</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {productList.map((product, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{product.productName}</td>
              <td>{product.productCategory}</td>
              <td>{product.productFreshness}</td>
              <td>{product.productPrice}</td>
              <td>
                <button
                  onClick={() => {
                    const confirmDelete = window.confirm(
                      "Are you sure you want to delete this product?"
                    );
                    if (confirmDelete) {
                      const newList = [...productList];
                      newList.splice(index, 1);
                      setProductList(newList);
                    }
                  }}
                >
                  Delete
                </button>
                <button onClick={() => handleEditProduct(product)}>
          Edit
        </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
const handleEditProduct = (product) => {
    setEditingProduct(product);
    setIsEditModalOpen(true);
  };
  
export default CreateProduct;
