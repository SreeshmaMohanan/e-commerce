import React from 'react'
import { Nav, Navbar, Container ,Badge} from 'react-bootstrap'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

function Header() {
    const whishlist =useSelector((state)=>state.wishlistReducer)
    return (
        <div>
            <Navbar style={{zIndex:'1'}} expand="lg" className="bg-primary position-fixed w-100">
                <Container>
                    <Navbar.Brand className='bold text-light'><i className='fa-solid fa-truck-fast me-2'></i>E-commerce</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto">
                        <Nav.Link className='btn border rounded me-2' ><Link style={{textDecoration:'none',color:'white',fontWeight:'bold'}} to='/wishlist'><i className='fa-solid fa-heart text-warning'></i> Wishlist <Badge className='ms-2 rounded' bg="secondary">{whishlist.length}</Badge> </Link></Nav.Link>
                            <Nav.Link className='btn border rounded' ><Link  style={{textDecoration:'none',color:'white',fontWeight:'bold'}}  to='/cart'> <i className='fa-solid fa-cart-shopping text-warning me-2'></i>Cart  <Badge className='ms-2 rounded' bg="secondary">10</Badge></Link></Nav.Link>
                            

                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    )
}

export default Header