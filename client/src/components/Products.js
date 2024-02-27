import React from 'react'

const Products = ({ name, imagePath }) => {
  console.log(name, imagePath)
  return (
    <div style={{ textAlign: 'center' }}>
      <img
        style={{ widows: '75%' }}
        src={`http://localhost:4000/${imagePath}`}
        alt={`${name} product`}
      />
      <form style={{ marginTop: '10px' }}>
        <label style={{ textAlign: 'right' }}>{name}</label>
        <input
          style={{ marginLeft: '7px' }}
          type="number"
          name="quantity"
          min="0"
          defaultValue={0}
        ></input>
      </form>
    </div>
  )
}

export default Products
