import React from 'react'
import styled from 'styled-components'
import Menu from '../components/Menu'
import Footer from '../components/Footer'

const NotFound = () => {
  return (
    <div>
      <Menu/>
      <div className="page-404 section--full-bg" style={{background: 'url(img/bg2.jpg) center top 140px / cover no-repeat', backgroundImage: 'url(img/bg2.jpg)', backgroundPositionX: 'center', backgroundPositionY: 'top 140px', backgroundSize: 'cover', backgroundAttachment: 'initial', backgroundOrigin: 'initial', backgroundClip: 'initial', backgroundColor: '#FFFFFF'}}>
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="page-404__wrap">
                <div className="page-404__content">
                  <h1 className="page-404__title">404</h1>
                  <p className="page-404__text">Oh hey there, do you know there{'\''}s nothing here? Well you do now.
                  </p>
                  <a href="index.html" className="page-404__btn">go back</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  )
}

export default NotFound
