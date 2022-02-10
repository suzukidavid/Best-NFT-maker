import React from 'react'
import Menu from '../../components/Menu'
import Footer from '../../components/Footer'

const Contact: React.FC = () => {

  return (
      <div>
        <Menu />
        <div>
        <section className="section section--first section--head" >
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className="section__wrap">
                  {/* section title */}
                  {/* end section title */}
                  {/* breadcrumb */}
                  <ul className="breadcrumb">
                    <li className="breadcrumb__item"><a href="/">Home</a></li>
                    <li className="breadcrumb__item breadcrumb__item--active">Contact Us</li>
                  </ul>
                  {/* end breadcrumb */}
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* end page title */}
        {/* section */}
        <section className="section">
          <div className="container">
            <div className="row">
              <div className="col-12 col-md-7 col-xl-8">
                <div className="row">
                  {/* section title */}
                  <div className="col-12">
                    <h2 className="section__title">Contact form</h2>
                  </div>
                  {/* end section title */}
                  <div className="col-12">
                    <form action="#" className="form form--contacts">
                      <input type="text" className="form__input" placeholder="Name" />
                      <input type="text" className="form__input" placeholder="Email" />
                      <input type="text" className="form__input" placeholder="Subject" />
                      <textarea name="text" className="form__textarea" placeholder="Type your message..." defaultValue="" />
                      <button type="button" className="form__btn">Submit</button>
                    </form>
                  </div>
                </div>
              </div>
              <div className="col-12 col-md-5 col-xl-4">
                <div className="row">
                  {/* section title */}
                  <div className="col-12">
                    <h2 className="section__title">Info</h2>
                  </div>
                  {/* end section title */}
                  <div className="col-12">
                    <p className="section__text section__text--mt">It is a long fact that a reader will be
                      distracted by the readable content of a page when looking at its layout.</p>
                    <ul className="contacts__list">
                      <li><a href="tel:+18092345678">+1 234 567-89-00</a></li>
                      <li><a href="mailto:support@gg.template">support@example.com</a></li>
                    </ul>
                    <div className="contacts__social">
                      <a className="fb" href="/"><svg xmlns="http://www.w3.org/2000/svg" width={512} height={512} viewBox="0 0 512 512">
                          <path d="M455.27,32H56.73A24.74,24.74,0,0,0,32,56.73V455.27A24.74,24.74,0,0,0,56.73,480H256V304H202.45V240H256V189c0-57.86,40.13-89.36,91.82-89.36,24.73,0,51.33,1.86,57.51,2.68v60.43H364.15c-28.12,0-33.48,13.3-33.48,32.9V240h67l-8.75,64H330.67V480h124.6A24.74,24.74,0,0,0,480,455.27V56.73A24.74,24.74,0,0,0,455.27,32Z" />
                        </svg></a>
                      <a className="inst" href="/"><svg xmlns="http://www.w3.org/2000/svg" width={512} height={512} viewBox="0 0 512 512">
                          <path d="M349.33,69.33a93.62,93.62,0,0,1,93.34,93.34V349.33a93.62,93.62,0,0,1-93.34,93.34H162.67a93.62,93.62,0,0,1-93.34-93.34V162.67a93.62,93.62,0,0,1,93.34-93.34H349.33m0-37.33H162.67C90.8,32,32,90.8,32,162.67V349.33C32,421.2,90.8,480,162.67,480H349.33C421.2,480,480,421.2,480,349.33V162.67C480,90.8,421.2,32,349.33,32Z" />
                          <path d="M377.33,162.67a28,28,0,1,1,28-28A27.94,27.94,0,0,1,377.33,162.67Z" />
                          <path d="M256,181.33A74.67,74.67,0,1,1,181.33,256,74.75,74.75,0,0,1,256,181.33M256,144A112,112,0,1,0,368,256,112,112,0,0,0,256,144Z" />
                        </svg></a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
        <Footer/>
      </div>
  )
}

export default Contact
