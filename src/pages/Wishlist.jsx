import React from 'react'
import { useSelector } from 'react-redux/es/hooks/useSelector'
import { Row,Col,Button ,Card} from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { removeFromWishlist } from '../redux/slices/wishlistSlice'
import { addToCart } from '../redux/slices/cartSlice'
function Wishlist() {
  const wishlistArray=useSelector((state)=>state.wishlistReducer)
  const dispatch=useDispatch()
  const handleWhishlistCart=(product)=>{
    dispatch(addToCart(product))
    dispatch(removeFromWishlist(product._id))

  }
  return (
    <div style={{marginTop:'100px'}}>
      <Row className='m-5'>
       { wishlistArray.length>0?
        wishlistArray.map((product,index)=>(
             
     <Col className='mb-5' sm={12} md={6} lg={4} xl={3}>
      <Card  className='shadow rounded bg-light' style={{ width: '18rem',height:'33rem' }}>
      <Card.Img variant="top" style={{height:'200px'}} src={product.thumbnail} />
      <Card.Body>
        <Card.Title>{product?.title}</Card.Title>
        <Card.Text>
          {product?.description.slice(0,55)}
          <h5>$ {product?.price}</h5>
        </Card.Text>

      <div className='d-flex justify-content-between align-items-center'>
         <Button style={{border:'none',fontSize:'30px'}} onClick={()=>dispatch(removeFromWishlist(product.id))} className='btn btn-light bg-transparent '> <i className='fa-solid fa-trash text-danger' variant></i></Button>
          <Button style={{border:'none',fontSize:'30px'}} onClick={()=>handleWhishlistCart(product)}  className='btn btn-light me-3 bg-transparent'> <i class="fa-solid fa-cart-plus text-success" varient></i></Button>
      </div>
      </Card.Body>
    </Card>
    </Col>
        )):<div className='d-flex flex-column w-100 justify-content-center align-items-center'>
          <img height={'250px'} src="https://cdn.dribbble.com/users/2046015/screenshots/5973727/06-loader_telega.gif" alt="" />
          <h3 className='fw-bolder text-dark mt-3'>Your whislist is empty!!!</h3>
          <Link to='/' className='btn btn-success rounded'>Back to home</Link></div>}
      </Row>

    </div>
  )
}

export default Wishlist