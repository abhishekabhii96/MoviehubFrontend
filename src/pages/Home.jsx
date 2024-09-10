import React, { useEffect, useState } from 'react'
import Carouselslide from '../components/Carouselslide'
import img3 from '../assets/greatest.avif'
import { Link } from 'react-router-dom'
import Movielist from '../components/Movielist'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { homeReviewApi } from '../services/allApi'


function Home() {
  const [isLogin, setIsLogin] = useState(false)
  const [homeReview, setHomeReview] = useState([])

  const getHomeReview = async () => {
    const result = await homeReviewApi()
    setHomeReview(result.data);
    console.log(homeReview);

  }


  useEffect(() => {
    if (sessionStorage.getItem("token")) {
      setIsLogin(true)
    }
    else {
      setIsLogin(false)
    }
    getHomeReview()
  }, [])




  return (
    <>
      <Header />
      <div className="container-fluid">
        <div className="row mt-4">
          <div className="col-md-1"></div>
          <div className="col-md-10 " style={{ backgroundColor: 'grey', borderRadius: '3%' }}>
            <div className="row">
              <div className="col-md-8 ">
                <Carouselslide />
              </div>
              <div className="col-md-4 ">
                <img className='img-fluid mt-5' src={img3} alt="noimg" style={{ width: '100%' }} />
                <p style={{ textAlign: 'justify', color: 'white' }} className='mt-2'>
                  Welcome to <span className='text-warning'>MovieHub,</span> the premier platform for movie enthusiasts to share their opinions and discover new cinematic gems. At MovieHub, we believe that every movie has a story worth telling, and we are here to provide a space where your voice can be heard.
                </p>
                {!isLogin ? <Link to={'/login'}>
                  <button className='btn btn-warning'>
                    JOIN US
                  </button> </Link>
                  :
                  <Link to={'/dashboard'}>
                    <button className='btn btn-warning'>
                      Review Dashboard
                    </button> </Link>}
              </div>
            </div>

            <div className="my-5">
              <h2 className='text-center text-warning'>Movie Reviews</h2>
              <div className="row ms-4">
                {homeReview?.length > 0 ?
                  homeReview.map((item) => (<div className="col-md-4 col-12 mb-4">
                    <Movielist movies={item} />
                  </div>))
                  : null}

              </div>
              <div className="text-center">
                <Link to={'/moviereviews'} className='text-warning'>
                  <h5 className='mt-4'>More reviews</h5>
                </Link>
              </div>
            </div>
          </div>
          <div className="col-md-1 d-none d-md-block"></div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default Home