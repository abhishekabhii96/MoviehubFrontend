import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import Movielist from '../components/Movielist'
import { allReviewApi } from '../services/allApi'



function Moviereviews() {
  const [allReviews , setAllReviews] = useState([])
  const [searchKey , setSearchKey] = useState("")


   const getAllReview = async()=>{
     const result = await allReviewApi(searchKey)
     if(result.status==200){
      setAllReviews(result.data);
     }
  }
   console.log(allReviews);
   
  useEffect(()=>{
    getAllReview()
  },[searchKey])


  console.log(searchKey);
  
  return (
    <>

      <Header />
      <div className="container-fluid" style={{ minHeight: '100vh', paddingBottom: '100px' }}>
        <div className="row justify-content-center">
          <div className="col-md-10" style={{ backgroundColor: 'grey', borderRadius: '3%' }}>
            <h1 className='text-center text-warning mt-2' style={{ fontSize: '30px' }}>
              Movie <span className='text-light'>Reviews</span>
            </h1>

            <div className='row mt-5 justify-content-center'>
              <div className="col-12 col-md-6 col-lg-4 d-flex">
                <input type="text" placeholder='Movie Name' className='form-control border-secondary' onChange={(e)=>setSearchKey(e.target.value)} />
                <FontAwesomeIcon icon={faMagnifyingGlass} style={{ marginTop: '10px', color: 'orange', marginLeft: '-30px' }} />
              </div>
            </div>

           {allReviews?.length>0? <div className='row mt-5 justify-content-center'>
             {allReviews?.map((item)=>(
               <div className="col-12 col-md-3 col-lg-3 col-sm-4">
               <Movielist movies={item}/>
            </div>
             ))}
            </div>
            
             :
            <p className='text-center text-warning mt-5' style={{ fontSize: '30px' }}>No reviews <span className='text-light'>available</span></p>}
         
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default Moviereviews