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
                  <h2 className="section__title">Profile</h2>
                  {/* end section title */}
                  {/* breadcrumb */}
                  <ul className="breadcrumb">
                    <li className="breadcrumb__item"><a href="index.html">Home</a></li>
                    <li className="breadcrumb__item breadcrumb__item--active">Profile</li>
                  </ul>
                  {/* end breadcrumb */}
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* end page title */}
        {/* section */}
        <section className="section section--last">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className="profile">
                  <div className="profile__user">
                    <div className="profile__avatar">
                      <img src="img/user.svg" alt="" />
                    </div>
                    <div className="profile__meta">
                      <h3>*Username*</h3>
                      <span>MetaMaskID: sha256</span>
                    </div>
                  </div>
                  <ul className="nav nav-tabs profile__tabs" id="profile__tabs" role="tablist">
                    <li className="nav-item">
                      <a className="nav-link active" data-toggle="tab" href="#tab-1" role="tab" aria-controls="tab-1" aria-selected="true">My Collection</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" data-toggle="tab" href="#tab-2" role="tab" aria-controls="tab-1" aria-selected="true">My Auctions</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" data-toggle="tab" href="#tab-3" role="tab" aria-controls="tab-3" aria-selected="true">My Subscriptions</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" data-toggle="tab" href="#tab-4" role="tab" aria-controls="tab-4" aria-selected="false">Settings</a>
                    </li>
                  </ul>
                  <button className="profile__logout" type="button">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                      <path d="M304 336v40a40 40 0 01-40 40H104a40 40 0 01-40-40V136a40 40 0 0140-40h152c22.09 0 48 17.91 48 40v40M368 336l80-80-80-80M176 256h256" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth={32} />
                    </svg>
                    <span>Logout</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="container">
            {/* content tabs */}
            <div className="tab-content">
              <div className="tab-pane fade show active" id="tab-1" role="tabpanel">
                <div className="row">
                  <div className="col-12">
                    <div className="table-responsive table-responsive--border">
                      <table className="profile__table">
                        <thead>
                          <tr>
                            <th>#</th>
                            <th>Product</th>
                            <th>Title</th>
                            <th>Category</th>
                            <th>Creator</th>
                            <th>Pice</th>
                            <th>Status</th>
                            <th>{' '}</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td><a href="/">8451</a></td>
                            <td>
                              <div className="profile__img">
                                <img src="img/cards/5.jpg" alt="" />
                              </div>
                            </td>
                            <td>Desperados III Digital Deluxe Edition</td>
                            <td>XBOX</td>
                            <td>Aug 22, 2020</td>
                            <td><span className="profile__price">$49.00</span></td>
                            <td><span className="profile__status">Not confirmed</span></td>
                            <td><button className="profile__delete" type="button"><svg xmlns="http://www.w3.org/2000/svg" width={512} height={512} viewBox="0 0 512 512">
                                  <line x1={368} y1={368} x2={144} y2={144} style={{fill: 'none', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: '32px'}} />
                                  <line x1={368} y1={144} x2={144} y2={368} style={{fill: 'none', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: '32px'}} />
                                </svg></button></td>
                          </tr>
                          <tr>
                            <td><a href="/">8126</a></td>
                            <td>
                              <div className="profile__img">
                                <img src="img/cards/7.jpg" alt="" />
                              </div>
                            </td>
                            <td>Red Dead Redemption 2</td>
                            <td>PC</td>
                            <td>July 22, 2020</td>
                            <td><span className="profile__price">$59.00</span></td>
                            <td><span className="profile__status profile__status--confirmed">Confirmed</span>
                            </td>
                            <td><button className="profile__delete" type="button"><svg xmlns="http://www.w3.org/2000/svg" width={512} height={512} viewBox="0 0 512 512">
                                  <line x1={368} y1={368} x2={144} y2={144} style={{fill: 'none', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: '32px'}} />
                                  <line x1={368} y1={144} x2={144} y2={368} style={{fill: 'none', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: '32px'}} />
                                </svg></button></td>
                          </tr>
                          <tr>
                            <td><a href="/">7314</a></td>
                            <td>
                              <div className="profile__img">
                                <img src="img/cards/3.jpg" alt="" />
                              </div>
                            </td>
                            <td>Baldur{'\''}s Gate II: Enhanced Edition</td>
                            <td>PC</td>
                            <td>June 12, 2019</td>
                            <td><span className="profile__price">$38.99</span></td>
                            <td><span className="profile__status profile__status--cenceled">Canceled</span>
                            </td>
                            <td><button className="profile__delete" type="button"><svg xmlns="http://www.w3.org/2000/svg" width={512} height={512} viewBox="0 0 512 512">
                                  <line x1={368} y1={368} x2={144} y2={144} style={{fill: 'none', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: '32px'}} />
                                  <line x1={368} y1={144} x2={144} y2={368} style={{fill: 'none', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: '32px'}} />
                                </svg></button></td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                  {/* paginator */}
                  <div className="col-12">
                    <div className="paginator">
                      <div className="paginator__counter">
                        3 from 9
                      </div>
                      <ul className="paginator__wrap">
                        <li className="paginator__item paginator__item--prev">
                          <a href="/">
                            <svg xmlns="http://www.w3.org/2000/svg" width={512} height={512} viewBox="0 0 512 512">
                              <polyline points="244 400 100 256 244 112" style={{fill: 'none', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: '48px'}} />
                              <line x1={120} y1={256} x2={412} y2={256} style={{fill: 'none', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: '48px'}} />
                            </svg>
                          </a>
                        </li>
                        <li className="paginator__item paginator__item--active"><a href="/">1</a></li>
                        <li className="paginator__item"><a href="/">2</a></li>
                        <li className="paginator__item"><a href="/">3</a></li>
                        <li className="paginator__item paginator__item--next">
                          <a href="/">
                            <svg xmlns="http://www.w3.org/2000/svg" width={512} height={512} viewBox="0 0 512 512">
                              <polyline points="268 112 412 256 268 400" style={{fill: 'none', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: '48px'}} />
                              <line x1={392} y1={256} x2={100} y2={256} style={{fill: 'none', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: '48px'}} />
                            </svg>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  {/* end paginator */}
                </div>
              </div>
              <div className="tab-pane fade" id="tab-4" role="tabpanel">
                <div className="row">
                  {/* details form */}
                  <div className="col-12 col-lg-6">
                    <form action="#" className="form">
                      <div className="row">
                        <div className="col-12">
                          <h4 className="form__title">Profile details</h4>
                        </div>
                        <div className="col-12 col-md-6 col-lg-12 col-xl-6">
                          <div className="form__label" >Username</div>
                          <input id="username" type="text" name="username" className="form__input" placeholder="User 123" />
                        </div>
                        <div className="col-12 col-md-6 col-lg-12 col-xl-6">
                          <div className="form__label">Email</div>
                          <input id="email" type="text" name="email" className="form__input" placeholder="email@email.com" />
                        </div>
                        <div className="col-12 col-md-6 col-lg-12 col-xl-6">
                          <div className="form__label" >First Name</div>
                          <input id="firstname" type="text" name="firstname" className="form__input" placeholder="John" />
                        </div>
                        <div className="col-12 col-md-6 col-lg-12 col-xl-6">
                          <div className="form__label">Last Name</div>
                          <input id="lastname" type="text" name="lastname" className="form__input" placeholder="Doe" />
                        </div>
                        <div className="col-12">
                          <button className="form__btn" type="button">Save</button>
                        </div>
                      </div>
                    </form>
                  </div>
                  {/* end details form */}
                  {/* password form */}
                  <div className="col-12 col-lg-6">
                    <form action="#" className="form">
                      <div className="row">
                        <div className="col-12">
                          <h4 className="form__title">Change password</h4>
                        </div>
                        <div className="col-12 col-md-6 col-lg-12 col-xl-6">
                          <div className="form__label" >Old Password</div>
                          <input id="oldpass" type="password" name="oldpass" className="form__input" />
                        </div>
                        <div className="col-12 col-md-6 col-lg-12 col-xl-6">
                          <div className="form__label" >New Password</div>
                          <input id="newpass" type="password" name="newpass" className="form__input" />
                        </div>
                        <div className="col-12 col-md-6 col-lg-12 col-xl-6">
                          <div className="form__label" >Confirm New Password</div>
                          <input id="confirmpass" type="password" name="confirmpass" className="form__input" />
                        </div>
                        <div className="col-12">
                          <button className="form__btn" type="button">Change</button>
                        </div>
                      </div>
                    </form>
                  </div>
                  {/* end password form */}
                </div>
              </div>
            </div>
            {/* end content tabs */}
          </div>
        </section>
      </div>
        <Footer/>
      </div>
  )
}

export default News
