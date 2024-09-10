import React, { useEffect } from 'react'
import { useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { addReviewApi } from '../services/allApi';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useContext } from 'react';
import { addResponseContext } from '../context/DataShare';



function Addreview() {

  const [show, setShow] = useState(false);
  const [movieDetails, setMovieDetails] = useState({
    movie: "",
    language: "",
    director: "",
    cast: "",
    username: "",
    review: "",
    movimg: ""
  })
  const [preview, setPreview] = useState("")
  const [token, setToken] = useState("")
  const [key , setKey] = useState(0)
  const { setAddResponse } = useContext(addResponseContext)


  console.log(movieDetails);

  const handleFile = (e) => {
    //console.log(e.target.files[0]);
    setMovieDetails({ ...movieDetails, movimg: e.target.files[0] })

  }

  const handleClose = () => setShow(false);
  const handleShow = () => {
    setShow(true);
    handleClose1()
  }
  const handleClose1 = () => {
    setMovieDetails({
      movie: "",
      language: "",
      director: "",
      cast: "",
      username: "",
      review: "",
      movimg: ""
    })
    setPreview("")
    if (key==0) {
      setKey(1)
    }
    else{
      setKey(0)
    }
  }

  useEffect(() => {
    if (movieDetails.movimg) {
      //create objectURL - convert files into Url
      setPreview(URL.createObjectURL(movieDetails.movimg));
    }
  }, [movieDetails.movimg])
  //console.log(preview);

  useEffect(() => {
    if (sessionStorage.getItem("token")) {
      setToken(sessionStorage.getItem("token"))
    }
  }, [])
  console.log(token);


  const handleAdd = async (e) => {
    e.preventDefault()

    const { movie, language, director, cast, username, review, movimg } = movieDetails
    if (!movie || !language || !director || !cast || !username || !review || !movimg) {
      toast.info('Please fill the form completely')
    }
    else {
      //api
      //inorder to send uploaded content - use formData
      const reqBody = new FormData()

      reqBody.append("movie", movie)
      reqBody.append("language", language)
      reqBody.append("director", director)
      reqBody.append("cast", cast)
      reqBody.append("username", username)
      reqBody.append("review", review)
      reqBody.append("movimg", movimg)


      if (token) {
        const reqHeader = {
          "Content-Type": "multipart/form-data",
          "Authorization": `Bearer ${token}`
        }
        const result = await addReviewApi(reqBody, reqHeader)
        console.log(result)
        if (result.status == 200) {
          toast.success('Review added')
          handleClose()
          setAddResponse(result.data)
        }

      }
      else {
        toast.info('Please Login')
      }
    }
  }


  return (
    <>
      <div className='ms-auto'>
        <button className='btn text-warning' onClick={handleShow} style={{ fontFamily: 'monospace' }}>CLICK TO ADD REVIEW</button>

        <Modal show={show} onHide={handleClose} size='lg'>
          <Modal.Header closeButton>
            <Modal.Title className='text-warning'>Add Movie Details</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Row>
              <Col sm={12} md={6}>
                <label htmlFor="mvimg">
                  <input id='mvimg' type="file" style={{ display: 'none' }} key={key} onChange={(e) => handleFile(e)} />
                  <img className='p-3' src={preview ? preview : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRyUqSyDd97aAm_K6-CI7_n9r2ZFnOxoxQVfQ&s"} alt="noimg" width={'100%'} />
                </label>
              </Col>
              <Col sm={12} md={6}>
                <form className="p-3">
                  <div className="mb-3">
                    <input type="text" placeholder='Movie' value={movieDetails.movie} className='form-control' onChange={(e) => setMovieDetails({ ...movieDetails, movie: e.target.value })} />
                  </div>
                  <div className="mb-3">
                    <input type="text" placeholder='Language' value={movieDetails.language} className='form-control' onChange={(e) => setMovieDetails({ ...movieDetails, language: e.target.value })} />
                  </div>
                  <div className="mb-3">
                    <input type="text" placeholder='Director' value={movieDetails.director} className='form-control' onChange={(e) => setMovieDetails({ ...movieDetails, director: e.target.value })} />
                  </div>
                  <div className="mb-3">
                    <input type="text" placeholder='Cast' value={movieDetails.cast} className='form-control' onChange={(e) => setMovieDetails({ ...movieDetails, cast: e.target.value })} />
                  </div>
                  <div className="mb-3">
                    <input type="text" placeholder='Username' value={movieDetails.username} className='form-control' onChange={(e) => setMovieDetails({ ...movieDetails, username: e.target.value })} />
                  </div>
                  <div className="mb-3">
                    <textarea placeholder='Review' value={movieDetails.review} className='form-control' rows={'4'} onChange={(e) => setMovieDetails({ ...movieDetails, review: e.target.value })}></textarea>
                  </div>
                </form>
              </Col>
            </Row>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="danger" onClick={handleClose1}>
              Cancel
            </Button>
            <Button variant="warning" onClick={handleAdd}>
              Add
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
      <ToastContainer position='top-center' theme='colored' autoClose={2000} />
    </>
  )
}

export default Addreview