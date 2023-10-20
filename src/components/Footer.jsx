import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <div style={{width:'100%',height:'400px'}}className='text-light d-flex justify-content-center align-items-center flex-column flex-wrap'>
        <div className='footer-content d-flex'>
            <div className="website m-5 " style={{width:'400px'}}>
                <h4>
              <i class="fa-solid fa-cloud-arrow-up"></i>{" "}
                 E-commerce</h4>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum vero saepe repellendus voluptatum delectus ullam.</p>

            </div>
            <div className="links d-flex flex-column m-5">
                <h4>Links</h4>
                <Link to={'/home'} className='' style={{textDecoration:'none',color:'black'}}>
                    Home
                </Link>
                <Link to={'/landing page'} className='' style={{textDecoration:'none',color:'black'}}>
                    Cart
                </Link>
                <Link to={'/'} className='' style={{textDecoration:'none',color:'black'}}>
                    Wishlist
                </Link>

            </div>
            <div  className="guides d-flex flex-column m-5">
            <h4>Guides</h4>
                <Link to={'/home'} className='' style={{textDecoration:'none',color:'black'}}>
                    React
                </Link>
                <Link to={'/landing page'} className='' style={{textDecoration:'none',color:'black'}}>
                    React Bootstrap
                </Link>
                <Link to={'/'} className='' style={{textDecoration:'none',color:'black'}}>
                    Routing 
                </Link>


            </div>
            <div md={12}  className="contacts d-flex flex-column me-5 mt-5">
            <h4>Contacts</h4>
                <Link to={'/home'} className='' style={{textDecoration:'none',color:'black'}}>
                    contact
                </Link>
             <div className='d-flex'>
                   <input type="text" placeholder='enter your email'/> <button className=' btn btn-warning ms-3'>Subscribe</button>
                   
             </div>
             <div>
             <i class="fa-brands fa-instagram fs-4 m-2"></i>
             <i class="fa-brands fa-facebook fs-4 m-2"></i>
             <i class="fa-brands fa-twitter fs-4 m-2"></i>
             <i class="fa-brands fa-whatsapp fs-4 m-2"></i>
             </div>


            </div>

        </div>
        <p>Copyright © 2023 E-commerce. Built with Docusaurus.</p>
        
    </div>
  )
}

export default Footer
