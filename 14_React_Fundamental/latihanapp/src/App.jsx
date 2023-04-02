import React, { useState } from "react";
import "./App.css";

function App() {
  const [data, setData] = useState([]);

  let accounts = [];

  function submitform(e) {
    e.preventDefault();

    const no = document.querySelector("#no").value;
    const productName = document.querySelector("#productName").value;
    const productCategory = document.querySelector("#productCategory").value;
    const imageofProduct = document.querySelector("#imageofProduct").value;
    const productFreshness = document.querySelector("#productFreshness").value;
    const additionalDesciption = document.querySelector(
      "#additionalDesciption"
    ).value;
    const productPrice = document.querySelector("#productPrice").value;

    // accounts.push({
    //   no,
    //   productName,
    //   productCategory,
    //   imageofProduct,
    //   productFreshness,
    //   additionalDesciption,
    //   productPrice,
    // });
    const newAccount = {
      no,
      productName,
      productCategory,
      imageofProduct,
      productFreshness,
      additionalDesciption,
      productPrice,
    };
    setData((currentData) => [...currentData, newAccount]);
  }
  console.log(data);

  function deleteButton() {
    setData(data.slice(0, -1));
    // data.pop();
    // renderAccounts();
  }

  function searchButton() {
    const no = document.querySelector("#no").value;
    const account = accounts.find((account) => account.no === no);
    if (account) {
      alert(`no: ${account.no}, productName: ${account.productName}, productCategory: ${account.productCategory}, imageofProduct: ${account.imageofProduct}
      , productFreshness: ${account.productFreshness}, additionalDesciption: ${account.additionalDesciption}, productPrice: ${account.productPrice}`);
    } else {
      alert("Account not found.");
    }
  }

  //   function renderAccounts() {
  //     accountList.innerHTML = "";

  //     for (let account of accounts) {
  //       const row = document.createElement("tr");
  //       const noCell = document.createElement("td");
  //       const productNameCell = document.createElement("td");
  //       const productCategoryCell = document.createElement("td");
  //       const imageofProductCell = document.createElement("td");
  //       const productFreshnessCell = document.createElement("td");
  //       const additionalDesciptionCell = document.createElement("td");
  //       const productPriceCell = document.createElement("td");

  //       noCell.textContent = account.no;
  //       productNameCell.textContent = account.productName;
  //       productCategoryCell.textContent = account.productCategory;
  //       imageofProductCell.textContent = account.imageofProduct;
  //       productFreshnessCell.textContent = account.additionalDesciption;
  //       additionalDesciptionCell.textContent = account.no;
  //       productPriceCell.textContent = account.productPrice;

  //       row.appendChild(noCell);
  //       row.appendChild(productNameCell);
  //       row.appendChild(productCategoryCell);
  //       row.appendChild(imageofProductCell);
  //       row.appendChild(productFreshnessCell);
  //       row.appendChild(additionalDesciptionCell);
  //       row.appendChild(productPriceCell);

  //       accountList.appendChild(row);
  //     }
  //   }

  return (
    <div>
      <form onSubmit={submitform}>
        <label for="no">Nomor :</label>
        <input type="text" id="no" name="no" />
        <br />
        <label for="productName">Product Name:</label>
        <input type="text" id="productName" name="productName" />
        <br />
        <label for="productCategory">Product Category:</label>
        <input type="text" id="productCategory" name="productCategory" />
        <br />
        <label for="imageofProduct">Image of Product:</label>
        <input type="text" id="imageofProduct" name="imageofProduct" />
        <br />
        <label for="productFreshness">Product Fresshness:</label>
        <input type="text" id="productFreshness" name="productFreshness" />
        <br />
        <label for="additionalDesciption">Additional Desciption:</label>
        <input
          type="text"
          id="additionalDesciption"
          name="additionalDesciption"
        />
        <br />
        <label for="productPrice">Product Price:</label>
        <input type="text" id="productPrice" name="productPrice" />
        <br />
        <button type="submit" id="add">
          Add
        </button>
        <button onClick={deleteButton} type="button" id="delete">
          Delete
        </button>
        <button type="button" id="search">
          Search
        </button>
      </form>

      <table>
        <thead>
          <tr>
            <th>Nomor </th>
            <th>Product Name</th>
            <th>Product Category</th>
            <th>Image of Product </th>
            <th>Product Fresshness </th>
            <th>Additional Desciption</th>
            <th>Product Price</th>
          </tr>
        </thead>
        <tbody id="account-list">
          {data?.map((account, id) => (
            <tr key={id}>
              <td>{account.no}</td>
              <td>{account.productName}</td>
              <td>{account.productCategory}</td>
              <td>{account.imageofProduct}</td>
              <td>{account.productFreshness}</td>
              <td>{account.additionalDesciption}</td>
              <td>{account.productCategory}</td>
              <td>{account.productPrice}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
