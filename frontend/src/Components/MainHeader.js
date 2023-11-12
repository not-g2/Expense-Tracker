import React from 'react'

const MainHeader = () => {
  return (
    <div className="p-3 text-bg-transparent text-white">
    <div className="container" >
      <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
        <a href="/" className="d-flex align-items-centre mb-2 mb-lg-0 text-white text-decoration-none">

        </a>


        <ul className="nav col-4 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
          <li><a href="./home" className="nav-link px-2 text-white ">Home</a></li>
          <li><a href="./pricing" className="nav-link px-2 text-white">Pricing</a></li>
          <li><a href="#" className="nav-link px-2 text-white">FAQs</a></li>
          <li><a href="./about" className="nav-link px-2 text-white">About_Us</a></li>
        </ul>



        <div className="text-end col-4">
          <button type="button" className="btn btn-outline-light me-2">Login</button>
          <button type="button" className="btn btn-outline-light me-2">Sign-up</button>
        </div>
      </div>
    </div>
    </div>
  )
}

export default MainHeader