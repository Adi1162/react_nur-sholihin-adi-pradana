<>
import React, { useState } from "react";
import "./CreateProduct.css";

  <title>Create Product</title>
  <link rel="stylesheet" type="text/css" href="style.css" />
  <center>
    {" "}
    <h1>Create Product</h1>
  </center>
  <form onsubmit="return validateForm()">
    <label htmlFor="productName">Product Name:</label>
    <input type="text" id="productName" name="productName" />
    <br />
    <label htmlFor="productPrice">Product Price:</label>
    <input type="text" id="productPrice" name="productPrice" />
    <br />
    <button type="submit">Create Product</button>
  </form>
</>