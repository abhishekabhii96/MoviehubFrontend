import React, { useState } from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'
import '../pages/stylee.css'
import { Link, useNavigate } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import { loginApi, registerApi } from '../services/allApi'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function Auth({ register }) {
  const navigate = useNavigate()
  const [userDetails, setUserDetails] = useState({
    username: "",
    email: "",
    password: ""
  })
  console.log(userDetails);

  const handleRegister = async ()=> {

    const { username, email, password } = userDetails

    if (!username || !email || !password) {
      toast.info('Please fill the form completely')
    }
    else {
      const result = await registerApi(userDetails)
      console.log(result);
      if (result.status==200) {
        toast.success('Registration successfull')
        navigate('/login')
      }
      else{
        toast.error('something went wrong')
      }
    }
  }



  const handleLogin = async ()=> {
    const { email, password } = userDetails
    if (!email || !password) {
      toast.info('Please fill  completely')
    }
    else {
      const result = await loginApi({ email, password })
      console.log(result);
      if(result.status==200){
        toast.success('Login successfull')
        sessionStorage.setItem("existingUser",JSON.stringify(result.data.existingUser))
        sessionStorage.setItem("token",result.data.token)
        setUserDetails({
          username: "",
          email: "",
          password: ""
        })
        setTimeout(()=>{
          navigate('/')
        },2000)
      }
      else{
        toast.error('result.response.data')
      }
    }
  }

  return (
    <>
      <Header />
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-1"></div>
          <div className="col-md-10" style={{ backgroundColor: 'grey', borderRadius: '3%', paddingBottom: '100px' }}>
            {/* Container for content */}
            <div className="row w-100">
              <div className="col-md-6 mt-5">
                <Link to={'/'} className='text-white' style={{ position: 'absolute', textDecoration: 'none' }}>
                  <FontAwesomeIcon icon={faArrowLeft} className='me-3' />
                  <span className='text-warning'>Back to</span> home
                </Link>
                <img style={{ width: '60%', marginTop: '50px', marginLeft: '50px', maxWidth: '60%' }} src="https://cdn.pixabay.com/animation/2023/10/10/13/26/13-26-07-593_512.gif" alt="imgGif" />
              </div>

              <div className="col-md-6 d-flex justify-content-center align-items-center flex-column mt-4">
                <h1 id='logtitle' className='text-center text-warning' style={{ fontSize: '40px' }}>Movie<span id='logtitle' className='text-white'>Hub</span></h1>
                {register ? <h5>Sign Up to your Account</h5> :
                  <h5>Sign In to your Account</h5>}

                <form className='mt-4 w-75'>
                  {register && <div className="mb-3">
                    <input type="text" placeholder='Username' className='form-control' onChange={(e) => setUserDetails({ ...userDetails, username: e.target.value })} />
                  </div>}
                  <div className="mb-3">
                    <input type="text" placeholder='Email' className='form-control' onChange={(e) => setUserDetails({ ...userDetails, email: e.target.value })} />
                  </div>
                  <div className="mb-3">
                    <input type="password" placeholder='Password' className='form-control' onChange={(e) => setUserDetails({ ...userDetails, password: e.target.value })} />
                  </div>
                  <div className="mb-3">
                    {register? <div>
                      <button type='button' className='btn btn-warning mb-3 w-100' onClick={handleRegister}>Register</button>
                      <p>Already a User? Click here to <Link to={'/login'} className='text-warning'>Login</Link></p>
                    </div> :
                      <div>
                        <button type='button' className='btn btn-warning w-100' onClick={handleLogin}>Login</button>
                        <p className='mt-2'>New User? Click here to <Link to={'/register'} className='text-warning'>Register</Link></p>
                      </div>}
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div className="col-md-1"></div>
        </div>
      </div>
      <ToastContainer position='top-center' theme='colored' autoClose={2000} />
      <Footer />

    </>
  )
}

export default Auth