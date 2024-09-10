import React, { useContext, useEffect, useState } from 'react'
import Addreview from '../components/Addreview'
import Editreview from '../components/Editreview'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import { deleteReviewApi, userReviewApi } from '../services/allApi'
import { addResponseContext, editResponseContext } from '../context/DataShare'



function Reviewslist() {

const [userReview , setUserReview] = useState([])
const {addResponse} = useContext(addResponseContext)
const [deleteStatus , setDeleteStatus] = useState(false)
const {editResponse} = useContext(editResponseContext)

  const getUserReviews = async () => {
    if (sessionStorage.getItem("token")) {
      const token = sessionStorage.getItem("token")
      const reqHeader = {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`
      }
      const result = await userReviewApi(reqHeader)
      setUserReview(result.data);
    }
  }
 // console.log(userReview);

  const handleDelete=async(id)=>{
    const result = await deleteReviewApi(id)
    console.log(result);
    if(result.status==200){
      setDeleteStatus(true)
    }
  }
  
 useEffect(()=>{
  getUserReviews()
  setDeleteStatus(false)
 },[addResponse,deleteStatus,editResponse])
 

  return (
    <>
      <div className='shadow p-3 rounded bg-dark border mb-4'>

        <div className='d-flex justify-content-between px-3 py-4' >
          <h4 className='text-warning '>My Reviews</h4>
          <Addreview />
        </div>
         
        {userReview?.length>0?
        userReview?.map((item)=>(
          <div className='mt-4 bg-secondary p-3 rounded d-flex justify-content-between'>
          <h5>{item.movie}</h5>
          <div className='d-flex align-items-center' >
            <Editreview movies={item}/>
            <FontAwesomeIcon icon={faTrash} className='ms-2 text-warning' onClick={()=>handleDelete(item?._id)} />
          </div>
        </div>
        ))
       
        : <p className='text-warning'>No Projects To Display</p>
        }

      </div>



    </>
  )
}

export default Reviewslist