import React from 'react'
import { faFacebook, faLinkedin, faTwitter , faInstagram} from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from 'react-router-dom'
import '../pages/stylee.css'
import imglogo from '../assets/movieappLogo.png'


function Footer() {
  return (

    <div className="row w-100 mt-5 p-3" /* style={{backgroundColor:''}} */>
    <div className="col-md-4 p-4 ms-md-5">
    <Link to={'/'}style={{color:'grey',textDecoration:'none'}}>
    <h4 id='ftitle' className='text-light fs-2'> <img src={imglogo} style={{ width: '70px' }} alt="MovieHubLogo" />MovieHub</h4>
    <p style={{textAlign:'justify'}}>MovieHub isn't just a rating site; it's a community of passionate film aficionados. Whether you’re a casual viewer or a hardcore cinephile, MovieHub offers a vibrant space to express your opinions and explore diverse perspectives. Join us and become part of a global conversation about the art of cinema!</p>
    </Link>
    </div>
    
    <div className="col-md-2 mt-4">   
            <h4 className='text-light mb-4'>Links</h4>
            <Link to={'/'}style={{color:'grey',textDecoration:'none'}}>Home</Link><br/><br/>
            <Link to={'/login'}style={{color:'grey',textDecoration:'none'}}>Login</Link><br/><br/>
            <Link to={'/moviereviews'}style={{color:'grey',textDecoration:'none'}}>Moviereviews</Link><br/><br/>
            <Link to={'/about'}style={{color:'grey',textDecoration:'none'}}>About</Link><br/>
    </div>
    <div className="col-md-2 p-3 mt-2 ">
        <h4 className='text-light'>Guides</h4>
        <p style={{color:'grey'}}>React</p>
        <p style={{color:'grey'}}>React Bootstrap</p>
        <p style={{color:'grey'}}>Bootswatch</p>
    </div>
    <div className="col-md-3 p-4">
        <h4 className='text-light'>Contact Us</h4>
    
    <div className='d-flex mt-4 justify-content-between'>
    <FontAwesomeIcon icon={faInstagram} size='2xl' />
    <FontAwesomeIcon icon={faFacebook} size='2xl'/>
    <FontAwesomeIcon icon={faTwitter} size='2xl' />
    <FontAwesomeIcon icon={faLinkedin} size='2xl' />
    </div>
    </div>
    <div className="col-md-1"></div>
  </div>

  )
}

export default Footer