import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { Col, Row } from 'react-bootstrap'
import Reviewslist from '../components/Reviewslist'

function Dashboard() {
  const [user , setUser ] = useState("")


  useEffect(()=>{
    if (sessionStorage.getItem("existingUser")) {
      setUser(JSON.parse(sessionStorage.getItem("existingUser")).username);
      
    }
  },[])

  return (
    <>
      <Header logoutshow={true} />
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-1"></div>

          <div className="col-md-10" style={{ backgroundColor: 'grey', borderRadius: '3%', paddingBottom: '100px' }}>          
              <h3 className='mt-3 ms-3 text-warning'>Welcome<span className='text-white ms-1'>{user}</span></h3>
         
         <Row className='container-fluid mt-5 p-5'>
           <Col sm={12} md={8}>
           <Reviewslist/>
           </Col>
           <Col sm={12} md={4}>
           <img className='mt-5' src="https://png.pngtree.com/png-clipart/20220825/ourmid/pngtree-movie-film-roll-black-and-white-png-image_6123879.png"width={'100%'} alt="noimg" />
           </Col>
         </Row>
         
          </div>

          <div className="col-md-1"></div>
        </div>
      </div>

      <Footer />



    </>

  )
}

export default Dashboard