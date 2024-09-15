// eslint-disable-next-line no-unused-vars
import React from 'react'

function Header() {
  return (
    <div>
        <nav className="navbar bg-dark navbar-expand-lg bg-body-dark" data-bs-theme="dark">
  <div className="container-fluid">
    <a className="navbar-brand" >Portfolio</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div className="navbar-nav">
        <a className="nav-link active" aria-current="page" >Home</a>
        <a className="nav-link" >Features</a>
        <a className="nav-link" >Pricing</a>
        
      </div>
    </div>
  </div>
</nav>
    </div>
  )
}

export default Header