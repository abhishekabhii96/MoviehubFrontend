import React, { useContext } from 'react'
import { useState, useEffect } from 'react';
import { Col, Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons';
import { serverUrl } from '../services/serverUrl';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { editReviewApi } from '../services/allApi';
import { editResponseContext } from '../context/DataShare';


function Editreview({ movies }) {

  const [show, setShow] = useState(false);
  const [reviewDetails, setReviewDetails] = useState({
    id: movies?._id,
    movie: movies?.movie,
    language: movies?.language,
    director: movies?.director,
    cast: movies?.cast,
    username: movies?.username,
    review: movies?.review,
    movimg: ""
  })

  const [preview, setPreview] = useState("")
  const [key, setKey] = useState(0)
  const {setEditResponse} = useContext(editResponseContext)

  const handleClose = () => {
    setShow(false);
    handleClose1()
  }
  const handleShow = () => setShow(true);
  console.log(reviewDetails);

  const handleFileUpload = (e) => {
    e.preventDefault()
    setReviewDetails({ ...reviewDetails, movimg: e.target.files[0] })

  }
  useEffect(() => {
    if (reviewDetails.movimg) {
      //create objectURL - convert files into Url
      setPreview(URL.createObjectURL(reviewDetails.movimg));
    }
  }, [reviewDetails.movimg])


  const handleClose1 = () => {
    setReviewDetails({
      movie: movies.movie,
      language: movies.language,
      director: movies.director,
      cast: movies.cast,
      username: movies.username,
      review: movies.review,
      movimg: ""
    })
    setPreview("")
    if(key==0){
      setKey(1)
    }
    else{
      setKey(0)
    }
  }

  const handleUpdate = async (e) => {
    e.preventDefault()

    const { id, movie, language, director, cast, username, review } = reviewDetails
    if (!movie || !language || !director || !cast || !username || !review) {
      toast.info('Please fill the form completely')
    }
    else {
      const reqBody = new FormData()

      reqBody.append("movie", movie)
      reqBody.append("language", language)
      reqBody.append("director", director)
      reqBody.append("cast", cast)
      reqBody.append("username", username)
      reqBody.append("review", review)
      preview? reqBody.append("movimg", movimg) : reqBody.append("movimg", movies.movimg)

      const token = sessionStorage.getItem("token")

      if (preview) { /* new image upload */
        const reqHeader = {
          "Content-Type": "multipart/form-data",
          "Authorization": `Bearer ${token}`
        }
        const result = await editReviewApi(id,reqBody,reqHeader)
        console.log(result);
        if (result.status == 200) {
          toast.success('project updated successfully')
          handleClose()
          setEditResponse(result.data)
        }
        else {
          toast.error('something went wrong')
        }

      }
      else { /* no new image upload */
        const reqHeader = {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${token}`
        }
        const result = await editReviewApi(id,reqBody,reqHeader)
        console.log(result);
        if (result.status == 200) {
          toast.success('project updated successfully')
          handleClose()
        }
        else {
          toast.error('something went wrong')
        }
      }


    }
  }

  return (

    <>
      <FontAwesomeIcon icon={faPenToSquare} className="text-warning me-2" onClick={handleShow} />

      <Modal show={show} onHide={handleClose} size='lg'>
        <Modal.Header closeButton>
          <Modal.Title className='text-warning'>Add Movie Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Row>
            <Col sm={12} md={6}>
              <label htmlFor="movimg">
                <input id='movimg' type="file" style={{ display: 'none' }} key={key} onChange={(e) => handleFileUpload(e)} />
                <img className='p-3' src={preview ? preview : `${serverUrl}/uploads/${movies?.movimg}`} alt="noimg" width={'100%'} />
              </label>
            </Col>
            <Col sm={12} md={6}>
              <form className="p-3">
                <div className="mb-3">
                  <input type="text" placeholder='Movie' className='form-control' value={reviewDetails?.movie} onChange={(e) => setReviewDetails({ ...reviewDetails, movie: e.target.value })} />
                </div>
                <div className="mb-3">
                  <input type="text" placeholder='Language' className='form-control' value={reviewDetails?.language} onChange={(e) => setReviewDetails({ ...reviewDetails, language: e.target.value })} />
                </div>
                <div className="mb-3">
                  <input type="text" placeholder='Director' className='form-control' value={reviewDetails?.director} onChange={(e) => setReviewDetails({ ...reviewDetails, director: e.target.value })} />
                </div>
                <div className="mb-3">
                  <input type="text" placeholder='Cast' className='form-control' value={reviewDetails?.cast} onChange={(e) => setReviewDetails({ ...reviewDetails, cast: e.target.value })} />
                </div>
                <div className="mb-3">
                  <input type="text" placeholder='Username' className='form-control' value={reviewDetails?.username} onChange={(e) => setReviewDetails({ ...reviewDetails, username: e.target.value })} />
                </div>
                <div className="mb-3">
                  <textarea placeholder='Review' className='form-control' rows={'4'} value={reviewDetails?.review} onChange={(e) => setReviewDetails({ ...reviewDetails, review: e.target.value })}></textarea>
                </div>
              </form>
            </Col>
          </Row>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="danger" onClick={handleClose1}>
            Cancel
          </Button>
          <Button variant="warning" onClick={handleUpdate}>
            Update
          </Button>
        </Modal.Footer>
      </Modal>
      <ToastContainer position='top-center' theme='colored' autoClose={2000} />

    </>
  )
}

export default Editreview