// src/ProductForm.js
import React, { useState } from 'react';
import QRCode from 'qrcode.react';

function ProductForm() {
  const [productName, setProductName] = useState('');

  const handleInputChange = (event) => {
    setProductName(event.target.value);
  };

  return (
    <div>
      <h2>Product Form</h2>
      <form>
        <label>
          Product Name:
          <input type="text" value={productName} onChange={handleInputChange} />
        </label>
      </form>
      {productName && (
        <div>
          <h3>QR Code:</h3>
          <QRCode value={productName} />
        </div>
      )}
    </div>
  );
}

export default ProductForm;
