import React from 'react'
import Menu from '../../components/Menu'
import Footer from '../../components/Footer'

const News: React.FC = () => {

  return (
      <div>
        <Menu />
        <div>
        <section className="section section--first section--last section--head" data-bg="img/bg.jpg" style={{background: 'url(img/bg.jpg) center top 140px / cover no-repeat', backgroundImage: 'url(img/bg.jpg)', backgroundPositionX: 'center', backgroundPositionY: 'top 140px', backgroundSize: 'cover', backgroundAttachment: 'initial', backgroundOrigin: 'initial', backgroundClip: 'initial', backgroundColor: 'initial'}}>
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className="section__wrap">
                  {/* section title */}
                  <h2 className="section__title">Help center</h2>
                  {/* end section title */}
                  {/* breadcrumb */}
                  <ul className="breadcrumb">
                    <li className="breadcrumb__item"><a href="index.html">Home</a></li>
                    <li className="breadcrumb__item breadcrumb__item--active">Help center</li>
                  </ul>
                  {/* end breadcrumb */}
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* end page title */}
        {/* section */}
        <section className="section section--last section--catalog">
          <div className="container">
            {/* catalog */}
            <div className="row catalog">
              {/* filter wrap */}
              <div className="col-12 col-lg-20">
                <div className="row">
                  <div className="col-12">
                    {/* filter */}
                    <div className="filter">
                      <h4 className="filter__title">Help center</h4>
                      <div className="filter__group">
                        <input type="text" className="filter__input" placeholder="Keyword" />
                      </div>
                      <div className="filter__group">
                        <div className="filter__label">Navigation:</div>
                        <ul className="filter__nav">
                          <li><a className="active" href="/">All</a></li>
                          <li><a href="/">GG.template</a></li>
                          <li><a href="/">Profile</a></li>
                          <li><a href="/">Categories</a></li>
                          <li><a href="/">Platforms</a></li>
                          <li><a href="/">Discounts</a></li>
                          <li><a href="/">Payment</a></li>
                          <li><a href="/">Delete account</a></li>
                        </ul>
                      </div>
                    </div>
                    {/* end filter */}
                  </div>
                </div>
              </div>
              {/* end filter wrap */}
              {/* content wrap */}
              <div className="col-12 col-lg-80">
                <div className="row">
                  <div className="col-12 col-lg-6">
                    <div className="faq">
                      <h3 className="faq__title">GG.template</h3>
                      <ul className="faq__list">
                        <li><a href="/">Many desktop publishing packages and web page?</a></li>
                        <li><a href="/">Various versions have evolved over the years?</a></li>
                        <li><a href="/">The point of using Lorem Ipsum?</a></li>
                        <li><a href="/">The generated Lorem Ipsum?</a></li>
                        <li><a href="/">All the Lorem Ipsum generators on the Internet?</a></li>
                      </ul>
                    </div>
                  </div>
                  <div className="col-12 col-lg-6">
                    <div className="faq">
                      <h3 className="faq__title">Profile</h3>
                      <ul className="faq__list">
                        <li><a href="/">Many desktop publishing packages and web page?</a></li>
                        <li><a href="/">Various versions have evolved over the years?</a></li>
                        <li><a href="/">The point of using Lorem Ipsum?</a></li>
                        <li><a href="/">The generated Lorem Ipsum?</a></li>
                        <li><a href="/">All the Lorem Ipsum generators on the Internet?</a></li>
                      </ul>
                    </div>
                  </div>
                  <div className="col-12 col-lg-6">
                    <div className="faq">
                      <h3 className="faq__title">Categories</h3>
                      <ul className="faq__list">
                        <li><a href="/">Many desktop publishing packages and web page?</a></li>
                        <li><a href="/">Various versions have evolved over the years?</a></li>
                        <li><a href="/">The point of using Lorem Ipsum?</a></li>
                        <li><a href="/">The generated Lorem Ipsum?</a></li>
                        <li><a href="/">All the Lorem Ipsum generators on the Internet?</a></li>
                      </ul>
                    </div>
                  </div>
                  <div className="col-12 col-lg-6">
                    <div className="faq">
                      <h3 className="faq__title">Platforms</h3>
                      <ul className="faq__list">
                        <li><a href="/">Many desktop publishing packages and web page?</a></li>
                        <li><a href="/">Various versions have evolved over the years?</a></li>
                        <li><a href="/">The point of using Lorem Ipsum?</a></li>
                        <li><a href="/">The generated Lorem Ipsum?</a></li>
                        <li><a href="/">All the Lorem Ipsum generators on the Internet?</a></li>
                      </ul>
                    </div>
                  </div>
                  <div className="col-12 col-lg-6">
                    <div className="faq">
                      <h3 className="faq__title">Discounts</h3>
                      <ul className="faq__list">
                        <li><a href="/">Many desktop publishing packages and web page?</a></li>
                        <li><a href="/">Various versions have evolved over the years?</a></li>
                        <li><a href="/">The point of using Lorem Ipsum?</a></li>
                        <li><a href="/">The generated Lorem Ipsum?</a></li>
                        <li><a href="/">All the Lorem Ipsum generators on the Internet?</a></li>
                      </ul>
                    </div>
                  </div>
                  <div className="col-12 col-lg-6">
                    <div className="faq">
                      <h3 className="faq__title">Payment</h3>
                      <ul className="faq__list">
                        <li><a href="/">Many desktop publishing packages and web page?</a></li>
                        <li><a href="/">Various versions have evolved over the years?</a></li>
                        <li><a href="/">The point of using Lorem Ipsum?</a></li>
                        <li><a href="/">The generated Lorem Ipsum?</a></li>
                        <li><a href="/">All the Lorem Ipsum generators on the Internet?</a></li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              {/* end content wrap */}
            </div>
            {/* end catalog */}	
          </div>
        </section>
      </div>
        <Footer/>
      </div>
  )
}

export default News
