// eslint-disable-next-line no-unused-vars
import React from 'react'
import Nav from 'react-bootstrap/Nav';
import './header.css';
function Header() {
  return (
    <div>
        <Nav style={{ backgroundColor: '#222831' }} className="navbar bg-dark navbar-expand-lg bg-body-dark" variant="underline" defaultActiveKey="/home" data-bs-theme="dark">
  <div className="container-fluid">
    <a className="navbar-brand  fw-bold fs-3" >Portfolio</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">

      <div className="navbar-nav container-flex ms-auto">
       
      <Nav.Item>
        <Nav.Link className='me-3 fs-5' href="/home">Home</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link className='me-3 fs-5' eventKey="link-1">About</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link className='me-3 fs-5' eventKey="link-2">Services</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link className='me-3 fs-5' eventKey="link-3">Skills</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link className='me-3 fs-5' eventKey="link-4">Project</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link className='me-3 fs-5' eventKey="link-5">Contact</Nav.Link>
      </Nav.Item>
      
        
      </div>
    </div>
  </div>
</Nav>
    </div>
  )
}

export default Header