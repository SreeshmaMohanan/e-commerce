import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { removeFromCart } from '../redux/slices/cartSlice'

function Cart() {
  const cartArray=useSelector(state=>state.cartReducer)
  const dispatch =useDispatch()
  const[total,setTotal]=useState(0)

  const totalCartAmount=()=>{
    if(cartArray.length>0){
      setTotal(cartArray.map(item=>item.price).reduce((p1,p2)=>p1+p2))
    }else{
      setTotal(0)
    }
  }
  useEffect(()=>{
    totalCartAmount()
  },[cartArray])
  return (
    <div className='container'  style={{marginTop:'100px'}}>{
      cartArray?.length>0?
      
       <div className='row mt-2'>
         <div className='col-lg-7'>
            <table className='table shadow border w-100'>
              <thead>
                <tr>
                  <th>#</th>
                  <th>Product Name</th>
                  <th>Product Image</th>
                  <th>Product Price</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {
                  cartArray.map((product,index)=>(<tr>

                  <td>{index+1}</td>
                  <td>{product?.title}</td>
                  <td><img height={'100px'} width={'200px'} src={product.thumbnail} alt="" /></td>
                  <td>${product?.price}</td>
                  <td><button className='btn btn-transparent' onClick={()=>dispatch(removeFromCart(product.id))}><i className='fa-solid fw-bold fa-trash text-danger'></i></button></td>
                </tr> ))
                }
              </tbody>
            </table>
         </div>
         <div className="col-lg-1"></div>
         <div className="col-lg-4">
          <div className="border p-3 rounded shadow">
            <h1 className=''>Cart Summary</h1>
            <h4>Total-products : <span>  {cartArray.length}</span></h4>
            <h4>Total : <span className='fw-bolder text-danger fs-2'>${total}</span> </h4>
            <div className="d-grid"><button className='btn btn-success mt-5 rounded'>Check-out</button></div>
          </div>
         </div>
       </div>
     :<div className='d-flex flex-column w-100 justify-content-center align-items-center'>
      <img height={'250px'} src="https://cdn.dribbble.com/users/2046015/screenshots/5973727/06-loader_telega.gif" alt="" />
      <h3 className='fw-bolder text-dark mt-3'>Your cart is empty!!!</h3>
      <Link to='/' className='btn btn-success rounded'>Back to home</Link></div>
    }
    </div>
  )
}

export default Cart