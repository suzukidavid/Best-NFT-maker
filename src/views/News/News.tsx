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
                  <h2 className="section__title">News</h2>
                  {/* end section title */}
                  {/* breadcrumb */}
                  <ul className="breadcrumb">
                    <li className="breadcrumb__item"><a href="index.html">Home</a></li>
                    <li className="breadcrumb__item breadcrumb__item--active">News</li>
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
            <div className="row">
              <div className="col-12">
                <div className="sort">
                  <div className="filter__group filter__group--sort">
                    <div className="filter__label">Genres:</div>
                    <div className="filter__select-wrap">
                      <select name="genres" id="genres" className="filter__select">
                        <option value={0}>All Categories</option>
                        <option value={1}>Action</option>
                        <option value={3}>Adventure</option>
                        <option value={4}>Fighting</option>
                        <option value={5}>Flight simulation</option>
                        <option value={6}>Platform</option>
                        <option value={7}>Racing</option>
                        <option value={8}>RPG</option>
                        <option value={9}>Sports</option>
                        <option value={10}>Strategy</option>
                        <option value={11}>Survival horror</option>
                      </select>
                    </div>
                  </div>
                  <div className="filter__group filter__group--sort">
                    <div className="filter__label">Sort by:</div>
                    <div className="filter__select-wrap">
                      <select name="sort" id="sort" className="filter__select">
                        <option value={0}>Relevance</option>
                        <option value={1}>Newest</option>
                        <option value={2}>Oldest</option>
                      </select>
                    </div>
                  </div>
                  <div className="sort__results">Found 123 posts</div>
                </div>
              </div>
              {/* post */}
              <div className="col-12 col-md-6 col-xl-4">
                <div className="post">
                  <a href="article.html" className="post__img">
                    <img src="img/posts/2.jpg" alt="" />
                  </a>
                  <div className="post__content">
                    <a href="/" className="post__category">NFS</a>
                    <h3 className="post__title"><a href="article.html">New hot race from your favorite computer
                        games studio</a></h3>
                    <div className="post__meta">
                      <span className="post__date"><svg xmlns="http://www.w3.org/2000/svg" width={512} height={512} viewBox="0 0 512 512">
                          <path d="M256,64C150,64,64,150,64,256s86,192,192,192,192-86,192-192S362,64,256,64Z" style={{fill: 'none', strokeMiterlimit: 10, strokeWidth: '32px'}} />
                          <polyline points="256 128 256 272 352 272" style={{fill: 'none', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: '32px'}} />
                        </svg> 2 hours ago</span>
                      <span className="post__comments"><svg xmlns="http://www.w3.org/2000/svg" width={512} height={512} viewBox="0 0 512 512">
                          <path d="M431,320.6c-1-3.6,1.2-8.6,3.3-12.2a33.68,33.68,0,0,1,2.1-3.1A162,162,0,0,0,464,215c.3-92.2-77.5-167-173.7-167C206.4,48,136.4,105.1,120,180.9a160.7,160.7,0,0,0-3.7,34.2c0,92.3,74.8,169.1,171,169.1,15.3,0,35.9-4.6,47.2-7.7s22.5-7.2,25.4-8.3a26.44,26.44,0,0,1,9.3-1.7,26,26,0,0,1,10.1,2L436,388.6a13.52,13.52,0,0,0,3.9,1,8,8,0,0,0,8-8,12.85,12.85,0,0,0-.5-2.7Z" style={{fill: 'none', strokeLinecap: 'round', strokeMiterlimit: 10, strokeWidth: '32px'}} />
                          <path d="M66.46,232a146.23,146.23,0,0,0,6.39,152.67c2.31,3.49,3.61,6.19,3.21,8s-11.93,61.87-11.93,61.87a8,8,0,0,0,2.71,7.68A8.17,8.17,0,0,0,72,464a7.26,7.26,0,0,0,2.91-.6l56.21-22a15.7,15.7,0,0,1,12,.2c18.94,7.38,39.88,12,60.83,12A159.21,159.21,0,0,0,284,432.11" style={{fill: 'none', strokeLinecap: 'round', strokeMiterlimit: 10, strokeWidth: '32px'}} />
                        </svg> 18</span>
                    </div>
                  </div>
                </div>
              </div>
              {/* end post */}
              {/* video post */}
              <div className="col-12 col-md-6 col-xl-4">
                <div className="post">
                  <a href="interview.html" className="post__cover">
                    <img src="img/posts/1.jpg" alt="" />
                  </a>
                  <a href="http://www.youtube.com/watch?v=0O2aH4XLbto" className="post__video">
                    <svg xmlns="http://www.w3.org/2000/svg" width={512} height={512} viewBox="0 0 512 512">
                      <path d="M112,111V401c0,17.44,17,28.52,31,20.16l247.9-148.37c12.12-7.25,12.12-26.33,0-33.58L143,90.84C129,82.48,112,93.56,112,111Z" style={{fill: 'none', strokeMiterlimit: 10, strokeWidth: '32px'}} />
                    </svg>
                  </a>
                  <div className="post__content">
                    <a href="/" className="post__category">CS:GO</a>
                    <h3 className="post__title"><a href="interview.html">Top 20 CS:GO players of 2020 according to
                        HOTFLIX.tv</a></h3>
                    <div className="post__meta">
                      <span className="post__date"><svg xmlns="http://www.w3.org/2000/svg" width={512} height={512} viewBox="0 0 512 512">
                          <path d="M256,64C150,64,64,150,64,256s86,192,192,192,192-86,192-192S362,64,256,64Z" style={{fill: 'none', strokeMiterlimit: 10, strokeWidth: '32px'}} />
                          <polyline points="256 128 256 272 352 272" style={{fill: 'none', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: '32px'}} />
                        </svg> 3 hours ago</span>
                      <span className="post__comments"><svg xmlns="http://www.w3.org/2000/svg" width={512} height={512} viewBox="0 0 512 512">
                          <path d="M431,320.6c-1-3.6,1.2-8.6,3.3-12.2a33.68,33.68,0,0,1,2.1-3.1A162,162,0,0,0,464,215c.3-92.2-77.5-167-173.7-167C206.4,48,136.4,105.1,120,180.9a160.7,160.7,0,0,0-3.7,34.2c0,92.3,74.8,169.1,171,169.1,15.3,0,35.9-4.6,47.2-7.7s22.5-7.2,25.4-8.3a26.44,26.44,0,0,1,9.3-1.7,26,26,0,0,1,10.1,2L436,388.6a13.52,13.52,0,0,0,3.9,1,8,8,0,0,0,8-8,12.85,12.85,0,0,0-.5-2.7Z" style={{fill: 'none', strokeLinecap: 'round', strokeMiterlimit: 10, strokeWidth: '32px'}} />
                          <path d="M66.46,232a146.23,146.23,0,0,0,6.39,152.67c2.31,3.49,3.61,6.19,3.21,8s-11.93,61.87-11.93,61.87a8,8,0,0,0,2.71,7.68A8.17,8.17,0,0,0,72,464a7.26,7.26,0,0,0,2.91-.6l56.21-22a15.7,15.7,0,0,1,12,.2c18.94,7.38,39.88,12,60.83,12A159.21,159.21,0,0,0,284,432.11" style={{fill: 'none', strokeLinecap: 'round', strokeMiterlimit: 10, strokeWidth: '32px'}} />
                        </svg> 50</span>
                    </div>
                  </div>
                </div>
              </div>
              {/* end video post */}
              {/* video post */}
              <div className="col-12 col-md-6 col-xl-4">
                <div className="post">
                  <a href="interview.html" className="post__cover">
                    <img src="img/posts/3.jpg" alt="" />
                  </a>
                  <a href="http://www.youtube.com/watch?v=0O2aH4XLbto" className="post__video">
                    <svg xmlns="http://www.w3.org/2000/svg" width={512} height={512} viewBox="0 0 512 512">
                      <path d="M112,111V401c0,17.44,17,28.52,31,20.16l247.9-148.37c12.12-7.25,12.12-26.33,0-33.58L143,90.84C129,82.48,112,93.56,112,111Z" style={{fill: 'none', strokeMiterlimit: 10, strokeWidth: '32px'}} />
                    </svg>
                  </a>
                  <div className="post__content">
                    <a href="/" className="post__category">Overview</a>
                    <h3 className="post__title"><a href="interview.html">Updated and customized gamepad</a></h3>
                    <div className="post__meta">
                      <span className="post__date"><svg xmlns="http://www.w3.org/2000/svg" width={512} height={512} viewBox="0 0 512 512">
                          <path d="M256,64C150,64,64,150,64,256s86,192,192,192,192-86,192-192S362,64,256,64Z" style={{fill: 'none', strokeMiterlimit: 10, strokeWidth: '32px'}} />
                          <polyline points="256 128 256 272 352 272" style={{fill: 'none', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: '32px'}} />
                        </svg> 4 hours ago</span>
                      <span className="post__comments"><svg xmlns="http://www.w3.org/2000/svg" width={512} height={512} viewBox="0 0 512 512">
                          <path d="M431,320.6c-1-3.6,1.2-8.6,3.3-12.2a33.68,33.68,0,0,1,2.1-3.1A162,162,0,0,0,464,215c.3-92.2-77.5-167-173.7-167C206.4,48,136.4,105.1,120,180.9a160.7,160.7,0,0,0-3.7,34.2c0,92.3,74.8,169.1,171,169.1,15.3,0,35.9-4.6,47.2-7.7s22.5-7.2,25.4-8.3a26.44,26.44,0,0,1,9.3-1.7,26,26,0,0,1,10.1,2L436,388.6a13.52,13.52,0,0,0,3.9,1,8,8,0,0,0,8-8,12.85,12.85,0,0,0-.5-2.7Z" style={{fill: 'none', strokeLinecap: 'round', strokeMiterlimit: 10, strokeWidth: '32px'}} />
                          <path d="M66.46,232a146.23,146.23,0,0,0,6.39,152.67c2.31,3.49,3.61,6.19,3.21,8s-11.93,61.87-11.93,61.87a8,8,0,0,0,2.71,7.68A8.17,8.17,0,0,0,72,464a7.26,7.26,0,0,0,2.91-.6l56.21-22a15.7,15.7,0,0,1,12,.2c18.94,7.38,39.88,12,60.83,12A159.21,159.21,0,0,0,284,432.11" style={{fill: 'none', strokeLinecap: 'round', strokeMiterlimit: 10, strokeWidth: '32px'}} />
                        </svg> 14</span>
                    </div>
                  </div>
                </div>
              </div>
              {/* end video post */}
              {/* post */}
              <div className="col-12 col-md-6 col-xl-4">
                <div className="post">
                  <a href="article.html" className="post__img">
                    <img src="img/posts/4.jpg" alt="" />
                  </a>
                  <div className="post__content">
                    <a href="/" className="post__category">PC</a>
                    <h3 className="post__title"><a href="article.html">Gaming computer RXZ-3000 Ultra with
                        revolutionary..</a></h3>
                    <div className="post__meta">
                      <span className="post__date"><svg xmlns="http://www.w3.org/2000/svg" width={512} height={512} viewBox="0 0 512 512">
                          <path d="M256,64C150,64,64,150,64,256s86,192,192,192,192-86,192-192S362,64,256,64Z" style={{fill: 'none', strokeMiterlimit: 10, strokeWidth: '32px'}} />
                          <polyline points="256 128 256 272 352 272" style={{fill: 'none', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: '32px'}} />
                        </svg> 5 hours ago</span>
                      <span className="post__comments"><svg xmlns="http://www.w3.org/2000/svg" width={512} height={512} viewBox="0 0 512 512">
                          <path d="M431,320.6c-1-3.6,1.2-8.6,3.3-12.2a33.68,33.68,0,0,1,2.1-3.1A162,162,0,0,0,464,215c.3-92.2-77.5-167-173.7-167C206.4,48,136.4,105.1,120,180.9a160.7,160.7,0,0,0-3.7,34.2c0,92.3,74.8,169.1,171,169.1,15.3,0,35.9-4.6,47.2-7.7s22.5-7.2,25.4-8.3a26.44,26.44,0,0,1,9.3-1.7,26,26,0,0,1,10.1,2L436,388.6a13.52,13.52,0,0,0,3.9,1,8,8,0,0,0,8-8,12.85,12.85,0,0,0-.5-2.7Z" style={{fill: 'none', strokeLinecap: 'round', strokeMiterlimit: 10, strokeWidth: '32px'}} />
                          <path d="M66.46,232a146.23,146.23,0,0,0,6.39,152.67c2.31,3.49,3.61,6.19,3.21,8s-11.93,61.87-11.93,61.87a8,8,0,0,0,2.71,7.68A8.17,8.17,0,0,0,72,464a7.26,7.26,0,0,0,2.91-.6l56.21-22a15.7,15.7,0,0,1,12,.2c18.94,7.38,39.88,12,60.83,12A159.21,159.21,0,0,0,284,432.11" style={{fill: 'none', strokeLinecap: 'round', strokeMiterlimit: 10, strokeWidth: '32px'}} />
                        </svg> 18</span>
                    </div>
                  </div>
                </div>
              </div>
              {/* end post */}
              {/* post */}
              <div className="col-12 col-md-6 col-xl-4">
                <div className="post">
                  <a href="article.html" className="post__img">
                    <img src="img/posts/5.jpg" alt="" />
                  </a>
                  <div className="post__content">
                    <a href="/" className="post__category">VR</a>
                    <h3 className="post__title"><a href="article.html">Augmented reality (AR) and Virtual Reality
                        (VR) bridge..</a></h3>
                    <div className="post__meta">
                      <span className="post__date"><svg xmlns="http://www.w3.org/2000/svg" width={512} height={512} viewBox="0 0 512 512">
                          <path d="M256,64C150,64,64,150,64,256s86,192,192,192,192-86,192-192S362,64,256,64Z" style={{fill: 'none', strokeMiterlimit: 10, strokeWidth: '32px'}} />
                          <polyline points="256 128 256 272 352 272" style={{fill: 'none', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: '32px'}} />
                        </svg> 9 hours ago</span>
                      <span className="post__comments"><svg xmlns="http://www.w3.org/2000/svg" width={512} height={512} viewBox="0 0 512 512">
                          <path d="M431,320.6c-1-3.6,1.2-8.6,3.3-12.2a33.68,33.68,0,0,1,2.1-3.1A162,162,0,0,0,464,215c.3-92.2-77.5-167-173.7-167C206.4,48,136.4,105.1,120,180.9a160.7,160.7,0,0,0-3.7,34.2c0,92.3,74.8,169.1,171,169.1,15.3,0,35.9-4.6,47.2-7.7s22.5-7.2,25.4-8.3a26.44,26.44,0,0,1,9.3-1.7,26,26,0,0,1,10.1,2L436,388.6a13.52,13.52,0,0,0,3.9,1,8,8,0,0,0,8-8,12.85,12.85,0,0,0-.5-2.7Z" style={{fill: 'none', strokeLinecap: 'round', strokeMiterlimit: 10, strokeWidth: '32px'}} />
                          <path d="M66.46,232a146.23,146.23,0,0,0,6.39,152.67c2.31,3.49,3.61,6.19,3.21,8s-11.93,61.87-11.93,61.87a8,8,0,0,0,2.71,7.68A8.17,8.17,0,0,0,72,464a7.26,7.26,0,0,0,2.91-.6l56.21-22a15.7,15.7,0,0,1,12,.2c18.94,7.38,39.88,12,60.83,12A159.21,159.21,0,0,0,284,432.11" style={{fill: 'none', strokeLinecap: 'round', strokeMiterlimit: 10, strokeWidth: '32px'}} />
                        </svg> 50</span>
                    </div>
                  </div>
                </div>
              </div>
              {/* end post */}
              {/* post */}
              <div className="col-12 col-md-6 col-xl-4">
                <div className="post">
                  <a href="article.html" className="post__img">
                    <img src="img/posts/7.jpg" alt="" />
                  </a>
                  <div className="post__content">
                    <a href="/" className="post__category">Community</a>
                    <h3 className="post__title"><a href="article.html">New York City gaming party (scandals and
                        investigations)</a></h3>
                    <div className="post__meta">
                      <span className="post__date"><svg xmlns="http://www.w3.org/2000/svg" width={512} height={512} viewBox="0 0 512 512">
                          <path d="M256,64C150,64,64,150,64,256s86,192,192,192,192-86,192-192S362,64,256,64Z" style={{fill: 'none', strokeMiterlimit: 10, strokeWidth: '32px'}} />
                          <polyline points="256 128 256 272 352 272" style={{fill: 'none', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: '32px'}} />
                        </svg> 9 hours ago</span>
                      <span className="post__comments"><svg xmlns="http://www.w3.org/2000/svg" width={512} height={512} viewBox="0 0 512 512">
                          <path d="M431,320.6c-1-3.6,1.2-8.6,3.3-12.2a33.68,33.68,0,0,1,2.1-3.1A162,162,0,0,0,464,215c.3-92.2-77.5-167-173.7-167C206.4,48,136.4,105.1,120,180.9a160.7,160.7,0,0,0-3.7,34.2c0,92.3,74.8,169.1,171,169.1,15.3,0,35.9-4.6,47.2-7.7s22.5-7.2,25.4-8.3a26.44,26.44,0,0,1,9.3-1.7,26,26,0,0,1,10.1,2L436,388.6a13.52,13.52,0,0,0,3.9,1,8,8,0,0,0,8-8,12.85,12.85,0,0,0-.5-2.7Z" style={{fill: 'none', strokeLinecap: 'round', strokeMiterlimit: 10, strokeWidth: '32px'}} />
                          <path d="M66.46,232a146.23,146.23,0,0,0,6.39,152.67c2.31,3.49,3.61,6.19,3.21,8s-11.93,61.87-11.93,61.87a8,8,0,0,0,2.71,7.68A8.17,8.17,0,0,0,72,464a7.26,7.26,0,0,0,2.91-.6l56.21-22a15.7,15.7,0,0,1,12,.2c18.94,7.38,39.88,12,60.83,12A159.21,159.21,0,0,0,284,432.11" style={{fill: 'none', strokeLinecap: 'round', strokeMiterlimit: 10, strokeWidth: '32px'}} />
                        </svg> 22</span>
                    </div>
                  </div>
                </div>
              </div>
              {/* end post */}
              {/* post */}
              <div className="col-12 col-md-6 col-xl-4">
                <div className="post">
                  <a href="article.html" className="post__img">
                    <img src="img/posts/6.jpg" alt="" />
                  </a>
                  <div className="post__content">
                    <a href="/" className="post__category">Playstation</a>
                    <h3 className="post__title"><a href="article.html">Family games selection</a></h3>
                    <div className="post__meta">
                      <span className="post__date"><svg xmlns="http://www.w3.org/2000/svg" width={512} height={512} viewBox="0 0 512 512">
                          <path d="M256,64C150,64,64,150,64,256s86,192,192,192,192-86,192-192S362,64,256,64Z" style={{fill: 'none', strokeMiterlimit: 10, strokeWidth: '32px'}} />
                          <polyline points="256 128 256 272 352 272" style={{fill: 'none', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: '32px'}} />
                        </svg> 12 hours ago</span>
                      <span className="post__comments"><svg xmlns="http://www.w3.org/2000/svg" width={512} height={512} viewBox="0 0 512 512">
                          <path d="M431,320.6c-1-3.6,1.2-8.6,3.3-12.2a33.68,33.68,0,0,1,2.1-3.1A162,162,0,0,0,464,215c.3-92.2-77.5-167-173.7-167C206.4,48,136.4,105.1,120,180.9a160.7,160.7,0,0,0-3.7,34.2c0,92.3,74.8,169.1,171,169.1,15.3,0,35.9-4.6,47.2-7.7s22.5-7.2,25.4-8.3a26.44,26.44,0,0,1,9.3-1.7,26,26,0,0,1,10.1,2L436,388.6a13.52,13.52,0,0,0,3.9,1,8,8,0,0,0,8-8,12.85,12.85,0,0,0-.5-2.7Z" style={{fill: 'none', strokeLinecap: 'round', strokeMiterlimit: 10, strokeWidth: '32px'}} />
                          <path d="M66.46,232a146.23,146.23,0,0,0,6.39,152.67c2.31,3.49,3.61,6.19,3.21,8s-11.93,61.87-11.93,61.87a8,8,0,0,0,2.71,7.68A8.17,8.17,0,0,0,72,464a7.26,7.26,0,0,0,2.91-.6l56.21-22a15.7,15.7,0,0,1,12,.2c18.94,7.38,39.88,12,60.83,12A159.21,159.21,0,0,0,284,432.11" style={{fill: 'none', strokeLinecap: 'round', strokeMiterlimit: 10, strokeWidth: '32px'}} />
                        </svg> 50</span>
                    </div>
                  </div>
                </div>
              </div>
              {/* end post */}
              {/* post */}
              <div className="col-12 col-md-6 col-xl-4">
                <div className="post">
                  <a href="article.html" className="post__img">
                    <img src="img/posts/8.jpg" alt="" />
                  </a>
                  <div className="post__content">
                    <a href="/" className="post__category">Community</a>
                    <h3 className="post__title"><a href="article.html">Game arcade room</a></h3>
                    <div className="post__meta">
                      <span className="post__date"><svg xmlns="http://www.w3.org/2000/svg" width={512} height={512} viewBox="0 0 512 512">
                          <path d="M256,64C150,64,64,150,64,256s86,192,192,192,192-86,192-192S362,64,256,64Z" style={{fill: 'none', strokeMiterlimit: 10, strokeWidth: '32px'}} />
                          <polyline points="256 128 256 272 352 272" style={{fill: 'none', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: '32px'}} />
                        </svg> 12 hours ago</span>
                      <span className="post__comments"><svg xmlns="http://www.w3.org/2000/svg" width={512} height={512} viewBox="0 0 512 512">
                          <path d="M431,320.6c-1-3.6,1.2-8.6,3.3-12.2a33.68,33.68,0,0,1,2.1-3.1A162,162,0,0,0,464,215c.3-92.2-77.5-167-173.7-167C206.4,48,136.4,105.1,120,180.9a160.7,160.7,0,0,0-3.7,34.2c0,92.3,74.8,169.1,171,169.1,15.3,0,35.9-4.6,47.2-7.7s22.5-7.2,25.4-8.3a26.44,26.44,0,0,1,9.3-1.7,26,26,0,0,1,10.1,2L436,388.6a13.52,13.52,0,0,0,3.9,1,8,8,0,0,0,8-8,12.85,12.85,0,0,0-.5-2.7Z" style={{fill: 'none', strokeLinecap: 'round', strokeMiterlimit: 10, strokeWidth: '32px'}} />
                          <path d="M66.46,232a146.23,146.23,0,0,0,6.39,152.67c2.31,3.49,3.61,6.19,3.21,8s-11.93,61.87-11.93,61.87a8,8,0,0,0,2.71,7.68A8.17,8.17,0,0,0,72,464a7.26,7.26,0,0,0,2.91-.6l56.21-22a15.7,15.7,0,0,1,12,.2c18.94,7.38,39.88,12,60.83,12A159.21,159.21,0,0,0,284,432.11" style={{fill: 'none', strokeLinecap: 'round', strokeMiterlimit: 10, strokeWidth: '32px'}} />
                        </svg> 17</span>
                    </div>
                  </div>
                </div>
              </div>
              {/* end post */}
              {/* post */}
              <div className="col-12 col-md-6 col-xl-4">
                <div className="post">
                  <a href="article.html" className="post__img">
                    <img src="img/posts/9.jpg" alt="" />
                  </a>
                  <div className="post__content">
                    <a href="/" className="post__category">Community</a>
                    <h3 className="post__title"><a href="article.html">Cosplay afterparty at ESL One Hamburg</a>
                    </h3>
                    <div className="post__meta">
                      <span className="post__date"><svg xmlns="http://www.w3.org/2000/svg" width={512} height={512} viewBox="0 0 512 512">
                          <path d="M256,64C150,64,64,150,64,256s86,192,192,192,192-86,192-192S362,64,256,64Z" style={{fill: 'none', strokeMiterlimit: 10, strokeWidth: '32px'}} />
                          <polyline points="256 128 256 272 352 272" style={{fill: 'none', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: '32px'}} />
                        </svg> 14 hours ago</span>
                      <span className="post__comments"><svg xmlns="http://www.w3.org/2000/svg" width={512} height={512} viewBox="0 0 512 512">
                          <path d="M431,320.6c-1-3.6,1.2-8.6,3.3-12.2a33.68,33.68,0,0,1,2.1-3.1A162,162,0,0,0,464,215c.3-92.2-77.5-167-173.7-167C206.4,48,136.4,105.1,120,180.9a160.7,160.7,0,0,0-3.7,34.2c0,92.3,74.8,169.1,171,169.1,15.3,0,35.9-4.6,47.2-7.7s22.5-7.2,25.4-8.3a26.44,26.44,0,0,1,9.3-1.7,26,26,0,0,1,10.1,2L436,388.6a13.52,13.52,0,0,0,3.9,1,8,8,0,0,0,8-8,12.85,12.85,0,0,0-.5-2.7Z" style={{fill: 'none', strokeLinecap: 'round', strokeMiterlimit: 10, strokeWidth: '32px'}} />
                          <path d="M66.46,232a146.23,146.23,0,0,0,6.39,152.67c2.31,3.49,3.61,6.19,3.21,8s-11.93,61.87-11.93,61.87a8,8,0,0,0,2.71,7.68A8.17,8.17,0,0,0,72,464a7.26,7.26,0,0,0,2.91-.6l56.21-22a15.7,15.7,0,0,1,12,.2c18.94,7.38,39.88,12,60.83,12A159.21,159.21,0,0,0,284,432.11" style={{fill: 'none', strokeLinecap: 'round', strokeMiterlimit: 10, strokeWidth: '32px'}} />
                        </svg> 38</span>
                    </div>
                  </div>
                </div>
              </div>
              {/* end post */}
              {/* paginator */}
              <div className="col-12">
                <div className="paginator">
                  <div className="paginator__counter">
                    9 from 144
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
        </section>
      </div>
        <Footer/>
      </div>
  )
}

export default News
