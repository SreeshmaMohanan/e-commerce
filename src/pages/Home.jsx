import React from 'react'
import { Row,Col, Card,Button } from 'react-bootstrap'
import useFetch from '../Hooks/useFetch'
import { addToWishList } from '../redux/slices/wishlistSlice'
import { useDispatch } from 'react-redux'

function Home() {
  const data = useFetch("https://dummyjson.com/products")
  //console.log(data);
  const dispatch=useDispatch()
  return (
    <Row style={{marginTop:'100px'}} className='ms-5'>
     { 
     data?.length>0?data.map((product,index)=>(
     
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
         <Button style={{border:'none',fontSize:'30px'}} className='btn btn-light bg-transparent ' onClick={()=>dispatch(addToWishList(product))}> <i className='fa-solid fa-heart text-danger' variant></i></Button>
          <Button style={{border:'none',fontSize:'30px'}}  className='btn btn-light me-3 bg-transparent'> <i class="fa-solid fa-cart-plus text-success" varient></i></Button>
      </div>
      </Card.Body>
    </Card>
    </Col>
    )):<p className='text-danger fw-folder fs-4'>Nothing to display!!!</p>}
    </Row>
  )
}

export default Home