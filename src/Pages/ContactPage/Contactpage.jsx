import React, { useState } from 'react'

const Contactpage = () => {

  const[formData,setFormData] = useState({
    name:"",
    email:""
  })
  
  const[editClicked,setClicked] = useState(false)
  const[editIndex,setEditIndex]= useState("")
  const[tabData,settabData] = useState([])

  const handlechange = (e)=>{
   const name = e.target.name
   const value = e.target.value
   setFormData(values=>({...values,[name]:value}))
 
  }

  const handlesubmit =(e)=>{
    e.preventDefault()
    console.log(formData)

    if(editClicked){
      const tempTabData =tabData
      Object.assign(tempTabData[editIndex],formData)
      settabData([...tempTabData])
    }else{
      settabData((data)=>([...data, formData]))
      setFormData({
        name:"",
        email:""
      })
    }
 
  }

  const edit = (i)=>{
    setClicked(true)
    const tempData = tabData[i]
   
    setFormData({name:tempData.name,email:tempData.email})
    setEditIndex(i)
    
  }

  const delet = (i)=>{
    const filtered = tabData.filter((item,index)=>{
      return index!==i
    })
    settabData(filtered)
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
 <button className='btn btn-lg btn-primary'>
  {editClicked?"Update":"Submit"}
 </button>
</form>

<div className="mt-4 container">
  <h1 className='m-5'>Dashboard</h1>
  <table className='table'>
    <thead>
      <tr>
      <th scope='col'>Name</th>
      <th scope="col">Email</th>
      <th scope='col'>Action</th>
    </tr>
    </thead>
    <tbody>
    {
  
  tabData&&(tabData.map((data,index)=>{
    return<>
  <tr key={index}>
    <td scope='row'>{data.name}</td>
    <td>{data.email}</td>
    <td><button className='btn btn-outline-primary' onClick={()=>edit(index)}>Edit</button> <button onClick={()=>delet(index)} className='btn btn-outline-danger'>Delete</button></td>
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