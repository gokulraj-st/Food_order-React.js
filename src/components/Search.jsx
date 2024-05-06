// SearchProduct.jsx
import React from 'react';

const Search = ({ searchResults }) => {
  return (
    <div style={{ textAlign:'center'}}>
      <table cellSpacing={10} style={{width:'100%'}}>
        <thead>
          <tr>
            <th>Image</th>
            <th>Name</th>
            <th>Price</th>
            <th>Description</th>
            <th>Category</th>
          </tr>
        </thead>
        <tbody>
          {searchResults.map(product => (
            <tr key={product._id}>
              <td><img src={product.image} alt={product.image} style={{ width: '50px', height: '50px', borderRadius:'50%' }} /></td>
              <td>{product.name}</td>
              <td>{product.price}</td>
              <td>{product.description}</td>
              <td>{product.category}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Search