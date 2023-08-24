import React, { useState } from 'react'



const Categorypage = () => {
  const[category,setCategory] =useState([
    { id: 1, name: 'T-shirt', price: 20,category:"shirt" },
    { id: 2, name: 'Jeans', price: 40,category:"pant" },
    { id: 3, name: 'Sneakers', price: 60,category:"shoe" },
    { id: 4, name: 'Watch', price: 100,category:"watch" },
    { id: 5, name: 'Backpack', price: 30 ,category:"bag"},
  ])
 const[query,setQuery]= useState()
  return (
  <>
  <div className="container">
  <input type="text" className='form-control m-3' onChange={(e)=>setQuery(e.target.value)} placeholder='category' />
  <div className="container">
    <div className="row">
    {
        category.filter((p)=>p.category.includes(query)).map((p)=>{
          return<>
           <div className="col-md-4">
          <div className="card" style={{ width: '18rem', margin: '10px' }} key={p.id}>
      <img src="data:image/jpeg;base64,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" className="card-img-top" alt={p.name} height="200"/>
      <div className="card-body">
        <h5 className="card-title">{p.name}</h5>
        <p className="card-text">Price: {p.price}</p>
        <button  className="btn btn-primary">
          Add to Cart
        </button>
        </div>
      </div>
      </div>
   
          </>
        })
      }
    </div>
  </div>
  </div>
  </>
  )
}

export default Categorypage