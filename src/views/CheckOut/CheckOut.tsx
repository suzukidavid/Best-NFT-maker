import React from 'react'
import Menu from '../../components/Menu'
import Footer from '../../components/Footer'

const CheckOut: React.FC = () => {

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
                  <h2 className="section__title">Checkout</h2>
                  {/* end section title */}
                  {/* breadcrumb */}
                  <ul className="breadcrumb">
                    <li className="breadcrumb__item"><a href="index.html">Home</a></li>
                    <li className="breadcrumb__item breadcrumb__item--active">Checkout</li>
                  </ul>
                  {/* end breadcrumb */}
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* end page title */}
        {/* section */}
        <div className="section">
          <div className="container">
            <div className="row">
              <div className="col-12 col-lg-8">
                {/* cart */}
                <div className="cart">
                  <div className="table-responsive">
                    <table className="cart__table">
                      <thead>
                        <tr>
                          <th>Product</th>
                          <th>Title</th>
                          <th>Platform</th>
                          <th>Price</th>
                          <th>{' '}</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>
                            <div className="cart__img">
                              <img src="img/cards/8.jpg" alt="" />
                            </div>
                          </td>
                          <td>Baldur{'\''}s Gate: Enhanced Edition</td>
                          <td>PC</td>
                          <td><span className="cart__price">$19.99</span></td>
                          <td><button className="cart__delete" type="button"><svg xmlns="http://www.w3.org/2000/svg" width={512} height={512} viewBox="0 0 512 512">
                                <line x1={368} y1={368} x2={144} y2={144} style={{fill: 'none', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: '32px'}} />
                                <line x1={368} y1={144} x2={144} y2={368} style={{fill: 'none', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: '32px'}} />
                              </svg></button></td>
                        </tr>
                        <tr>
                          <td>
                            <div className="cart__img">
                              <img src="img/cards/3.jpg" alt="" />
                            </div>
                          </td>
                          <td>Dandara: Trials of Fear Edition</td>
                          <td>Playstation</td>
                          <td><span className="cart__price">$7.99</span></td>
                          <td><button className="cart__delete" type="button"><svg xmlns="http://www.w3.org/2000/svg" width={512} height={512} viewBox="0 0 512 512">
                                <line x1={368} y1={368} x2={144} y2={144} style={{fill: 'none', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: '32px'}} />
                                <line x1={368} y1={144} x2={144} y2={368} style={{fill: 'none', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: '32px'}} />
                              </svg></button></td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <div className="cart__info">
                    <div className="cart__total">
                      <p>Total:</p>
                      <span>$27.98</span>
                    </div>
                    <div className="cart__systems">
                      <i className="pf pf-visa" />
                      <i className="pf pf-mastercard" />
                      <i className="pf pf-paypal" />
                    </div>
                  </div>
                </div>
                {/* end cart */}
              </div>
              <div className="col-12 col-lg-4">
                {/* checkout */}
                <form action="#" className="form form--first form--coupon">
                  <input type="text" className="form__input" placeholder="Coupon code" />
                  <button type="button" className="form__btn">Apply</button>
                </form>
                {/* end checkout */}
                {/* checkout */}
                <form action="#" className="form">
                  <input type="text" name="name" className="form__input" placeholder="John Doe" />
                  <input type="text" name="email" className="form__input" placeholder="gg@template.buy" />
                  <input type="text" name="phone" className="form__input" placeholder="+1 234 567-89-00" />
                  <select name="systems" className="form__select">
                    <option value="visa">Visa</option>
                    <option value="mastercard">Mastercard</option>
                    <option value="paypal">Paypal</option>
                  </select>
                  <button type="button" className="form__btn">Complete</button>
                </form>
                {/* end checkout */}
              </div>
            </div>
          </div>
        </div>
        {/* end section */}
        {/* section */}
        <div className="section section--last">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className="partners owl-carousel">
                  <a href="/" className="partners__img">
                    <img src="img/partners/3docean-light-background.png" alt="" />
                  </a>
                  <a href="/" className="partners__img">
                    <img src="img/partners/activeden-light-background.png" alt="" />
                  </a>
                  <a href="/" className="partners__img">
                    <img src="img/partners/audiojungle-light-background.png" alt="" />
                  </a>
                  <a href="/" className="partners__img">
                    <img src="img/partners/codecanyon-light-background.png" alt="" />
                  </a>
                  <a href="/" className="partners__img">
                    <img src="img/partners/photodune-light-background.png" alt="" />
                  </a>
                  <a href="/" className="partners__img">
                    <img src="img/partners/themeforest-light-background.png" alt="" />
                  </a>
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

export default CheckOut
