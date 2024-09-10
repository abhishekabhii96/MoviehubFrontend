import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'

function About() {
  return (
<>

<Header />
   <div className="container-fluid ">
        <div className="row ">
          <div className="col-md-1"></div>
          <div className="col-md-10 " style={{ height: '100vh', backgroundColor: 'grey', borderRadius: '3%' }}>
              <h3 className='mt-5'>Movie<span className='text-warning'> Hub</span></h3>
              <p>
              Welcome to Movie Hub, your ultimate destination for sharing and discovering movie opinions! At Movie Hub, we believe that every movie experience is unique and personal, which is why we’ve created a platform where movie enthusiasts like you can come together to share your thoughts, insights, and reviews.
              <p>At Movie Hub, we’re passionate about movies and the diverse perspectives that come with them. Our platform is designed to be user-friendly, inclusive, and dynamic, ensuring that every user has a great experience. We strive to provide a space where movie lovers from all walks of life can connect and share their passion for cinema.</p>
              </p>
          </div>
          <div className="col-md-1"></div>
        </div>
      </div>
      <Footer/>
   </>
  )
}

export default About