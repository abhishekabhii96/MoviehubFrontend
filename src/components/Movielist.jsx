import React from 'react'
import Card from 'react-bootstrap/Card';
import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import { serverUrl } from '../services/serverUrl';

function Movielist({movies}) {
  console.log(movies);
  
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Card className="m-2 shadow mb-2" style={{ maxWidth: '20rem', height:'90%'}} onClick={handleShow}>
      <Card.Img variant="top"src={`${serverUrl}/uploads/${movies.movimg}`} alt='noImg' width={'100%'} height={'200px'} style={{objectFit:'cover'}}/>
      <Card.Body>
        <Card.Text>
          <h5 style={{fontSize:'15px',color:'orange'}}>Movie:  {movies.movie}</h5>
          <h5 style={{fontSize:'15px'}}>Language: {movies.language}</h5>
        </Card.Text>
      </Card.Body>
    </Card>

    <Modal show={show} onHide={handleClose}size='lg'>
        <Modal.Header closeButton>
          <Modal.Title style={{fontFamily:'monospace'}}><span className='text-warning'>Movie</span>Hub</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <img src={`${serverUrl}/uploads/${movies.movimg}`} alt="noimg" width={'100%'} height={'400px'} style={{objectFit:'cover'}}/>

        <h5 style={{fontSize:'20px',color:'orange'}}>Movie:  {movies.movie}</h5>
        <h5 style={{fontSize:'15px'}}>Language: {movies.language}</h5>
        <h5 style={{fontSize:'15px'}}>Director: {movies.director}</h5>
        <h5 style={{fontSize:'15px'}}>Cast: {movies.cast}</h5>
        <h5 style={{fontSize:'15px'}}>User name: {movies.username}</h5>
        <p style={{fontSize:'15px'}}>Review: {movies.review}</p>
       
        </Modal.Body>
      </Modal>
    </>
  )
}

export default Movielist