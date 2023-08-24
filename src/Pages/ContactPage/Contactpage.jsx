import React, { useState } from 'react'

const Contactpage = () => {

  const[formData,setFormData] = useState({
    name:"",
    email:""
  })

  const[tabData,settabData] = useState([])

  const handlechange = (e)=>{
   const name = e.target.name
   const value = e.target.value
   setFormData(values=>({...values,[name]:value}))
   console.log(formData)
  }

  const handlesubmit =(e)=>{
    e.preventDefault()
    console.log(formData)
   settabData((data)=>([...data, formData]))
    console.log(tabData)
  }
  return (
<>
<form className='container' onSubmit={handlesubmit}>
  <h1 className='text-center m-3'>Contact Us</h1>
  <div className="mb-3">
    <label htmlFor="Name">Name</label>
    <input className='form-control' type="text" name="name" value={formData.name} id='Name' onChange={(e)=>handlechange(e)}/>
  </div>
  <div className="mb-3">
    <label htmlFor="email">Email</label>
    <input type="email" className='form-control' value={formData.email} name="email" id='email' onChange={(e)=>handlechange(e)}/>
  </div>
 <button className='btn btn-lg btn-primary'>Submit</button>
</form>

<div className="mt-4 container">
  <h1 className='m-5'>Dashboard</h1>
  <table className='table'>
    <thead>
      <tr>
      <th scope='col'>Name</th>
      <th scope="col">Email</th>
    </tr>
    </thead>
    <tbody>
    {
  
  tabData&&(tabData.map((data,i)=>{
    return<>
  <tr key={i}>
    <td scope='row'>{data.name}</td>
    <td>{data.email}</td>
  </tr>

    </>
  }))
}
</tbody>

  </table>
</div>



</>
  )
}

export default Contactpage