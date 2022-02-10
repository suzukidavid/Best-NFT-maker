import React from 'react'
import OwlCarousel from 'react-owl-carousel';
import Menu from '../../components/Menu'
import Footer from '../../components/Footer'
import BigCard from './components/BigCard';
import Carousel from '../Gallery/Carousel';
import NewDrops from './components/NewDrops';
import Subscriptions from './components/Subscriptions';


import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

const responsive1 = {
  0:{
    items:1,
    margin: 0,
    nav:true
  },
  600:{
      items:1,
      margin: 20,
      nav:true
  },
  1000:{
      items:2,
      nav:true
  }
}

const responsive2 = {
  0:{
    items:1,
    margin: 0,
    nav:true
  },
  600:{
      items:3,
      nav:true
  },
  1000:{
      items:5,
      nav:true
  }
}

const responsive3 = {
  0:{
    items:1,
    nav:true
  },
  600:{
      items:3,
      nav:true
  },
  1000:{
      items:5,
      nav:true
  }
}

const responsive4 = {
  0:{
    items:3,
    autoplay:true
  },
  600:{
      items:4,
      nav:false,
      autoplay:true
  },
  1000:{
      items:6,
      nav:false,
      autoplay:true
  }
}

const Home: React.FC = () => {

  return (
      <div>
        <Menu />
        <section className="section section--bg section--first">
          <div className="container">
              <div className="row">
                <div className="col-12">
                  <div className="section__title-wrap">
                    <h2 className="section__title section__title--title"><b>Best games</b> of this month</h2>
                    <div className="section__nav-wrap" style={{height:"35px"}}> </div>
                  </div>
                </div>
              </div>
            
            <OwlCarousel className='owl-theme' responsiveClass responsive={responsive1} loop margin={20} nav items={2}>
                <div className='item'>
                    <div className="card card--big">
                      <a href="/details.html" className="card__cover">
                        <img src="img/home/demo/best_game/1.png" alt="" />
                      </a>

                      <div className="card__wrap">
                        <div className="card__title">
                          <h3><a href="/details.html">X4: Foundations Collector&apos;s Edition</a></h3>
                        </div>

                        <ul className="card__list">
                          <li><span>Release date:</span> 30.11.2018</li>
                          <li><span>Genres:</span> Simulation, Action, Sci-fi</li>
                        </ul>

                        <div className="card__price">
                          <span>$59.99</span>
                        </div>
                        

                        

                        <div className="card__actions">
                          <button className="card__buy" type="button">Buy now</button>

                          <button className="card__favorite" type="button">
                            <svg xmlns='http://www.w3.org/2000/svg' width='512' height='512' viewBox='0 0 512 512'>
                              <path d='M352.92,80C288,80,256,144,256,144s-32-64-96.92-64C106.32,80,64.54,124.14,64,176.81c-1.1,109.33,86.73,187.08,183,252.42a16,16,0,0,0,18,0c96.26-65.34,184.09-143.09,183-252.42C447.46,124.14,405.68,80,352.92,80Z'  className="common_svg2"/>
                            </svg>
                          </button>
                        </div>
                      </div>
                    </div>
                </div>
                <div className='item'>
                    <div className="card card--big">
                      <a href="/details.html" className="card__cover">
                        <img src="img/home/demo/best_game/2.png" alt="" />
                      </a>

                      <div className="card__wrap">
                        <div className="card__title">
                          <h3><a href="/details.html">X4: Foundations Collector&apos;s Edition</a></h3>
                        </div>

                        <ul className="card__list">
                          <li><span>Release date:</span> 30.11.2018</li>
                          <li><span>Genres:</span> Simulation, Action, Sci-fi</li>
                        </ul>

                        <div className="card__price">
                          <span>$59.99</span>
                        </div>

                        

                        <div className="card__actions">
                          <button className="card__buy" type="button">Buy now</button>

                          <button className="card__favorite" type="button">
                            <svg xmlns='http://www.w3.org/2000/svg' width='512' height='512' viewBox='0 0 512 512'>
                              <path d='M352.92,80C288,80,256,144,256,144s-32-64-96.92-64C106.32,80,64.54,124.14,64,176.81c-1.1,109.33,86.73,187.08,183,252.42a16,16,0,0,0,18,0c96.26-65.34,184.09-143.09,183-252.42C447.46,124.14,405.68,80,352.92,80Z'  className="common_svg2"/>
                            </svg>
                          </button>
                        </div>
                      </div>
                    </div>
                </div>
                <div className='item'>
                    <div className="card card--big">
                      <a href="/details.html" className="card__cover">
                        <img src="img/home/demo/best_game/3.jpg" alt="" />
                      </a>

                      <div className="card__wrap">
                        <div className="card__title">
                          <h3><a href="/details.html">X4: Foundations Collector&apos;s Edition</a></h3>
                        </div>

                        <ul className="card__list">
                          <li><span>Release date:</span> 30.11.2018</li>
                          <li><span>Genres:</span> Simulation, Action, Sci-fi</li>
                        </ul>

                        <div className="card__price">
                          <span>$59.99</span>
                        </div>

                        <div className="card__actions">
                          <button className="card__buy" type="button">Buy now</button>

                          <button className="card__favorite" type="button">
                            <svg xmlns='http://www.w3.org/2000/svg' width='512' height='512' viewBox='0 0 512 512'>
                              <path d='M352.92,80C288,80,256,144,256,144s-32-64-96.92-64C106.32,80,64.54,124.14,64,176.81c-1.1,109.33,86.73,187.08,183,252.42a16,16,0,0,0,18,0c96.26-65.34,184.09-143.09,183-252.42C447.46,124.14,405.68,80,352.92,80Z'  className="common_svg2"/>
                            </svg>
                          </button>
                        </div>
                      </div>
                    </div>
                </div>
                <div className='item'>
                    <div className="card card--big">
                      <a href="/details.html" className="card__cover">
                        <img src="img/home/demo/best_game/4.png" alt="" />
                      </a>

                      <div className="card__wrap">
                        <div className="card__title">
                          <h3><a href="/details.html">X4: Foundations Collector&apos;s Edition</a></h3>
                        </div>

                        <ul className="card__list">
                          <li><span>Release date:</span> 30.11.2018</li>
                          <li><span>Genres:</span> Simulation, Action, Sci-fi</li>
                        </ul>

                        
                        <div className="card__price">
                          <span>$59.99</span>
                        </div>

                        

                        <div className="card__actions">
                          <button className="card__buy" type="button">Buy now</button>

                          <button className="card__favorite" type="button">
                            <svg xmlns='http://www.w3.org/2000/svg' width='512' height='512' viewBox='0 0 512 512'>
                              <path d='M352.92,80C288,80,256,144,256,144s-32-64-96.92-64C106.32,80,64.54,124.14,64,176.81c-1.1,109.33,86.73,187.08,183,252.42a16,16,0,0,0,18,0c96.26-65.34,184.09-143.09,183-252.42C447.46,124.14,405.68,80,352.92,80Z'  className="common_svg2"/>
                            </svg>
                          </button>
                        </div>
                      </div>
                    </div>
                </div>
                <div className='item'>
                    <div className="card card--big">
                      <a href="/details.html" className="card__cover">
                        <img src="img/home/demo/best_game/5.gif" alt="" />
                      </a>

                      <div className="card__wrap">
                        <div className="card__title">
                          <h3><a href="/details.html">X4: Foundations Collector&apos;s Edition</a></h3>
                        </div>

                        <ul className="card__list">
                          <li><span>Release date:</span> 30.11.2018</li>
                          <li><span>Genres:</span> Simulation, Action, Sci-fi</li>
                        </ul>

                        <div className="card__price">
                          <span>$59.99</span>
                        </div>

                        

                        <div className="card__actions">
                          <button className="card__buy" type="button">Buy now</button>

                          <button className="card__favorite" type="button">
                            <svg xmlns='http://www.w3.org/2000/svg' width='512' height='512' viewBox='0 0 512 512'>
                              <path d='M352.92,80C288,80,256,144,256,144s-32-64-96.92-64C106.32,80,64.54,124.14,64,176.81c-1.1,109.33,86.73,187.08,183,252.42a16,16,0,0,0,18,0c96.26-65.34,184.09-143.09,183-252.42C447.46,124.14,405.68,80,352.92,80Z'  className="common_svg2"/>
                            </svg>
                          </button>
                        </div>
                      </div>
                    </div>
                </div>
                <div className='item'>
                    <div className="card card--big">
                      <a href="/details.html" className="card__cover">
                        <img src="img/home/demo/best_game/6.gif" alt="" />
                      </a>

                      <div className="card__wrap">
                        <div className="card__title">
                          <h3><a href="/details.html">X4: Foundations Collector&apos;s Edition</a></h3>
                        </div>

                        <ul className="card__list">
                          <li><span>Release date:</span> 30.11.2018</li>
                          <li><span>Genres:</span> Simulation, Action, Sci-fi</li>
                        </ul>

                        <div className="card__price">
                          <span>$59.99</span>
                        </div>

                        <div className="card__actions">
                          <button className="card__buy" type="button">Buy now</button>

                          <button className="card__favorite" type="button">
                            <svg xmlns='http://www.w3.org/2000/svg' width='512' height='512' viewBox='0 0 512 512'>
                              <path d='M352.92,80C288,80,256,144,256,144s-32-64-96.92-64C106.32,80,64.54,124.14,64,176.81c-1.1,109.33,86.73,187.08,183,252.42a16,16,0,0,0,18,0c96.26-65.34,184.09-143.09,183-252.42C447.46,124.14,405.68,80,352.92,80Z'  className="common_svg2"/>
                            </svg>
                          </button>
                        </div>
                      </div>
                    </div>
                </div>
                <div className='item'>
                    <div className="card card--big">
                      <a href="/details.html" className="card__cover">
                        <img src="img/home/demo/best_game/7.gif" alt="" />
                      </a>

                      <div className="card__wrap">
                        <div className="card__title">
                          <h3><a href="/details.html">X4: Foundations Collector&apos;s Edition</a></h3>
                        </div>

                        <ul className="card__list">
                          <li><span>Release date:</span> 30.11.2018</li>
                          <li><span>Genres:</span> Simulation, Action, Sci-fi</li>
                        </ul>

                        <div className="card__price">
                          <span>$59.99</span>
                        </div>

                        <div className="card__actions">
                          <button className="card__buy" type="button">Buy now</button>

                          <button className="card__favorite" type="button">
                            <svg xmlns='http://www.w3.org/2000/svg' width='512' height='512' viewBox='0 0 512 512'>
                              <path d='M352.92,80C288,80,256,144,256,144s-32-64-96.92-64C106.32,80,64.54,124.14,64,176.81c-1.1,109.33,86.73,187.08,183,252.42a16,16,0,0,0,18,0c96.26-65.34,184.09-143.09,183-252.42C447.46,124.14,405.68,80,352.92,80Z'  className="common_svg2"/>
                            </svg>
                          </button>
                        </div>
                      </div>
                    </div>
                </div>
                <div className='item'>
                    <div className="card card--big">
                      <a href="/details.html" className="card__cover">
                        <img src="img/home/demo/best_game/8.gif" alt="" />
                      </a>

                      <div className="card__wrap">
                        <div className="card__title">
                          <h3><a href="/details.html">X4: Foundations Collector&apos;s Edition</a></h3>
                        </div>

                        <ul className="card__list">
                          <li><span>Release date:</span> 30.11.2018</li>
                          <li><span>Genres:</span> Simulation, Action, Sci-fi</li>
                        </ul>

                        <div className="card__price">
                          <span>$59.99</span>
                        </div>

                        <div className="card__actions">
                          <button className="card__buy" type="button">Buy now</button>

                          <button className="card__favorite" type="button">
                            <svg xmlns='http://www.w3.org/2000/svg' width='512' height='512' viewBox='0 0 512 512'>
                              <path d='M352.92,80C288,80,256,144,256,144s-32-64-96.92-64C106.32,80,64.54,124.14,64,176.81c-1.1,109.33,86.73,187.08,183,252.42a16,16,0,0,0,18,0c96.26-65.34,184.09-143.09,183-252.42C447.46,124.14,405.68,80,352.92,80Z'  className="common_svg2"/>
                            </svg>
                          </button>
                        </div>
                      </div>
                    </div>
                </div>
                
            </OwlCarousel>
          </div>
        </section>
        <section className="section">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className="section__title-wrap section__title-wrap--single">
                  <h2 className="section__title">Latest releases</h2>

                  <div className="section__nav-wrap">
                    <a href="catalog.html" className="section__view">View All</a>
                  </div>
                </div>
              </div>
            </div>

            <div className="row catalog-page">
              <div className="col-12 col-sm-6 col-md-4 col-lg-3">
                <div className="card card--catalog">
                  <a href="details.html" className="card__cover">
                    <img src="img/home/demo/1.jpg" alt="" />
                  </a>

                  <div className="card__title">
                    <h3><a href="details.html">Desperados III Digital Deluxe Edition</a></h3>
                    <span>$49.00</span>
                  </div>
                </div>
              </div>

              <div className="col-12 col-sm-6 col-md-4 col-lg-3">
                <div className="card card--catalog">
                  <a href="details.html" className="card__cover">
                    <img src="img/home/demo/2.jpg" alt="" />
                  </a>

                  <div className="card__title">
                    <h3><a href="details.html">Red Dead Redemption 2</a></h3>
                    <span>$7.99 <s>$19.99</s></span>
                  </div>
                </div>
              </div>

              <div className="col-12 col-sm-6 col-md-4 col-lg-3">
                <div className="card card--catalog">
                  <a href="details.html" className="card__cover">
                    <img src="img/home/demo/3.jpg" alt="" />
                  </a>

                  <div className="card__title">
                    <h3><a href="details.html">Dandara: Trials of Fear Edition</a></h3>
                    <span>$18.00</span>
                  </div>
                </div>
              </div>

              <div className="col-12 col-sm-6 col-md-4 col-lg-3">
                <div className="card card--catalog">
                  <a href="details.html" className="card__cover">
                    <img src="img/home/demo/4.jpg" alt="" />
                  </a>

                  <div className="card__title">
                    <h3><a href="details.html">Druidstone: The Secret of the Menhir Forest</a></h3>
                    <span>$12.49</span>
                  </div>
                </div>
              </div>

              <div className="col-12 col-sm-6 col-md-4 col-lg-3">
                <div className="card card--catalog">
                  <a href="details.html" className="card__cover">
                    <img src="img/home/demo/7.jpg" alt="" />
                  </a>

                  <div className="card__title">
                    <h3><a href="details.html">Dandara: Trials of Fear Edition</a></h3>
                    <span>$18.00</span>
                  </div>
                </div>
              </div>

              <div className="col-12 col-sm-6 col-md-4 col-lg-3">
                <div className="card card--catalog">
                  <a href="details.html" className="card__cover">
                    <img src="img/home/demo/8.jpg" alt="" />
                  </a>

                  <div className="card__title">
                    <h3><a href="details.html">Druidstone: The Secret of the Menhir Forest</a></h3>
                    <span>$12.49</span>
                  </div>
                </div>
              </div>

              <div className="col-12 col-sm-6 col-md-4 col-lg-3">
                <div className="card card--catalog">
                  <a href="details.html" className="card__cover">
                    <img src="img/home/demo/7.jpg" alt="" />
                  </a>

                  <div className="card__title">
                    <h3><a href="details.html">Baldur&apos;s Gate II: Enhanced Edition</a></h3>
                    <span>$38.99 <s>$59.99</s></span>
                  </div>
                </div>
              </div>

              <div className="col-12 col-sm-6 col-md-4 col-lg-3">
                <div className="card card--catalog">
                  <a href="details.html" className="card__cover">
                    <img src="img/home/demo/8.jpg" alt="" />
                  </a>

                  <div className="card__title">
                    <h3><a href="details.html">Baldur&apos;s Gate: Enhanced Edition</a></h3>
                    <span>$9.99 <s>$39.99</s></span>
                  </div>
                </div>
              </div>
              
              <div className="col-12">
                <div className="paginator">
                  <div className="paginator__counter">
                    12 from 943
                  </div>

                  <ul className="paginator__wrap">
                    <li className="paginator__item paginator__item--prev">
                      <a href="/#">
                        <svg xmlns='http://www.w3.org/2000/svg' width='512' height='512' viewBox='0 0 512 512'><polyline points='244 400 100 256 244 112' className='common_svg1'/><line x1='120' y1='256' x2='412' y2='256' className='common_svg1'/></svg>
                      </a>
                    </li>
                    <li className="paginator__item paginator__item--active"><a href="/#">1</a></li>
                    <li className="paginator__item"><a href="/#">2</a></li>
                    <li className="paginator__item"><a href="/#">3</a></li>
                    <li className="paginator__item paginator__item--next">
                      <a href="/#">
                        <svg xmlns='http://www.w3.org/2000/svg' width='512' height='512' viewBox='0 0 512 512'><polyline points='268 112 412 256 268 400' className='common_svg1'/><line x1='392' y1='256' x2='100' y2='256' className='common_svg1'/></svg>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
         
        <section className="section">
          <div className="container">
            <div className="row">
               
              <div className="col-12">
                <div className="section__title-wrap">
                  <h2 className="section__title section__title--pre">Pre-orders</h2>

                  <div className="section__nav-wrap">
                    <a href="/catalog.html" className="section__view">View All</a>

                    
                  </div>
                </div>
              </div>
            </div>
            <OwlCarousel className='owl-theme' responsiveClass responsive={responsive3} loop margin={20} nav items={5}>

              <div className='item'>
                <div className="card">
                  <a href="/details.html" className="card__cover">
                    <img src="img/home/demo/4.jpg" alt="" />
                  </a>

                 

                  <div className="card__title">
                    <h3><a href="/details.html">BioShock Infinite Complete Edition</a></h3>
                    <span>$55.99 <s>$79.99</s></span>
                  </div>

                  <div className="card__actions">
                    <button className="card__buy" type="button">Pre-order</button>

                    <button className="card__favorite" type="button">
                      <svg xmlns='http://www.w3.org/2000/svg' width='512' height='512' viewBox='0 0 512 512'><path d='M352.92,80C288,80,256,144,256,144s-32-64-96.92-64C106.32,80,64.54,124.14,64,176.81c-1.1,109.33,86.73,187.08,183,252.42a16,16,0,0,0,18,0c96.26-65.34,184.09-143.09,183-252.42C447.46,124.14,405.68,80,352.92,80Z'  className="common_svg2"/></svg>
                    </button>
                  </div>
                </div>
              </div>
              <div className='item'>
                <div className="card">
                  <a href="/details.html" className="card__cover">
                    <img src="img/home/demo/3.jpg" alt="" />
                  </a>

                 

                  <div className="card__title">
                    <h3><a href="/details.html">BioShock Infinite Complete Edition</a></h3>
                    <span>$55.99 <s>$79.99</s></span>
                  </div>

                  <div className="card__actions">
                    <button className="card__buy" type="button">Pre-order</button>

                    <button className="card__favorite" type="button">
                      <svg xmlns='http://www.w3.org/2000/svg' width='512' height='512' viewBox='0 0 512 512'><path d='M352.92,80C288,80,256,144,256,144s-32-64-96.92-64C106.32,80,64.54,124.14,64,176.81c-1.1,109.33,86.73,187.08,183,252.42a16,16,0,0,0,18,0c96.26-65.34,184.09-143.09,183-252.42C447.46,124.14,405.68,80,352.92,80Z'  className="common_svg2"/></svg>
                    </button>
                  </div>
                </div>
              </div>
              <div className='item'>
                <div className="card">
                  <a href="/details.html" className="card__cover">
                    <img src="img/home/demo/2.jpg" alt="" />
                  </a>

                 

                  <div className="card__title">
                    <h3><a href="/details.html">BioShock Infinite Complete Edition</a></h3>
                    <span>$55.99 <s>$79.99</s></span>
                  </div>

                  <div className="card__actions">
                    <button className="card__buy" type="button">Pre-order</button>

                    <button className="card__favorite" type="button">
                      <svg xmlns='http://www.w3.org/2000/svg' width='512' height='512' viewBox='0 0 512 512'><path d='M352.92,80C288,80,256,144,256,144s-32-64-96.92-64C106.32,80,64.54,124.14,64,176.81c-1.1,109.33,86.73,187.08,183,252.42a16,16,0,0,0,18,0c96.26-65.34,184.09-143.09,183-252.42C447.46,124.14,405.68,80,352.92,80Z'  className="common_svg2"/></svg>
                    </button>
                  </div>
                </div>
              </div>
              <div className='item'>
                <div className="card">
                  <a href="/details.html" className="card__cover">
                    <img src="img/home/demo/1.jpg" alt="" />
                  </a>

                 

                  <div className="card__title">
                    <h3><a href="/details.html">BioShock Infinite Complete Edition</a></h3>
                    <span>$55.99 <s>$79.99</s></span>
                  </div>

                  <div className="card__actions">
                    <button className="card__buy" type="button">Pre-order</button>

                    <button className="card__favorite" type="button">
                      <svg xmlns='http://www.w3.org/2000/svg' width='512' height='512' viewBox='0 0 512 512'><path d='M352.92,80C288,80,256,144,256,144s-32-64-96.92-64C106.32,80,64.54,124.14,64,176.81c-1.1,109.33,86.73,187.08,183,252.42a16,16,0,0,0,18,0c96.26-65.34,184.09-143.09,183-252.42C447.46,124.14,405.68,80,352.92,80Z'  className="common_svg2"/></svg>
                    </button>
                  </div>
                </div>
              </div>
              <div className='item'>
                <div className="card">
                  <a href="/details.html" className="card__cover">
                    <img src="img/home/demo/7.jpg" alt="" />
                  </a>

                 

                  <div className="card__title">
                    <h3><a href="/details.html">BioShock Infinite Complete Edition</a></h3>
                    <span>$55.99 <s>$79.99</s></span>
                  </div>

                  <div className="card__actions">
                    <button className="card__buy" type="button">Pre-order</button>

                    <button className="card__favorite" type="button">
                      <svg xmlns='http://www.w3.org/2000/svg' width='512' height='512' viewBox='0 0 512 512'><path d='M352.92,80C288,80,256,144,256,144s-32-64-96.92-64C106.32,80,64.54,124.14,64,176.81c-1.1,109.33,86.73,187.08,183,252.42a16,16,0,0,0,18,0c96.26-65.34,184.09-143.09,183-252.42C447.46,124.14,405.68,80,352.92,80Z'  className="common_svg2"/></svg>
                    </button>
                  </div>
                </div>
              </div>
              <div className='item'>
                <div className="card">
                  <a href="/details.html" className="card__cover">
                    <img src="img/home/demo/9.jpg" alt="" />
                  </a>

                 

                  <div className="card__title">
                    <h3><a href="/details.html">BioShock Infinite Complete Edition</a></h3>
                    <span>$55.99 <s>$79.99</s></span>
                  </div>

                  <div className="card__actions">
                    <button className="card__buy" type="button">Pre-order</button>

                    <button className="card__favorite" type="button">
                      <svg xmlns='http://www.w3.org/2000/svg' width='512' height='512' viewBox='0 0 512 512'><path d='M352.92,80C288,80,256,144,256,144s-32-64-96.92-64C106.32,80,64.54,124.14,64,176.81c-1.1,109.33,86.73,187.08,183,252.42a16,16,0,0,0,18,0c96.26-65.34,184.09-143.09,183-252.42C447.46,124.14,405.68,80,352.92,80Z'  className="common_svg2"/></svg>
                    </button>
                  </div>
                </div>
              </div>
              <div className='item'>
                <div className="card">
                  <a href="/details.html" className="card__cover">
                    <img src="img/cards/9.jpg" alt="" />
                  </a>

                 

                  <div className="card__title">
                    <h3><a href="/details.html">BioShock Infinite Complete Edition</a></h3>
                    <span>$55.99 <s>$79.99</s></span>
                  </div>

                  <div className="card__actions">
                    <button className="card__buy" type="button">Pre-order</button>

                    <button className="card__favorite" type="button">
                      <svg xmlns='http://www.w3.org/2000/svg' width='512' height='512' viewBox='0 0 512 512'><path d='M352.92,80C288,80,256,144,256,144s-32-64-96.92-64C106.32,80,64.54,124.14,64,176.81c-1.1,109.33,86.73,187.08,183,252.42a16,16,0,0,0,18,0c96.26-65.34,184.09-143.09,183-252.42C447.46,124.14,405.68,80,352.92,80Z'  className="common_svg2"/></svg>
                    </button>
                  </div>
                </div>
              </div>
              <div className='item'>
                <div className="card">
                  <a href="/details.html" className="card__cover">
                    <img src="img/cards/9.jpg" alt="" />
                  </a>

                 

                  <div className="card__title">
                    <h3><a href="/details.html">BioShock Infinite Complete Edition</a></h3>
                    <span>$55.99 <s>$79.99</s></span>
                  </div>

                  <div className="card__actions">
                    <button className="card__buy" type="button">Pre-order</button>

                    <button className="card__favorite" type="button">
                      <svg xmlns='http://www.w3.org/2000/svg' width='512' height='512' viewBox='0 0 512 512'><path d='M352.92,80C288,80,256,144,256,144s-32-64-96.92-64C106.32,80,64.54,124.14,64,176.81c-1.1,109.33,86.73,187.08,183,252.42a16,16,0,0,0,18,0c96.26-65.34,184.09-143.09,183-252.42C447.46,124.14,405.68,80,352.92,80Z'  className="common_svg2"/></svg>
                    </button>
                  </div>
                </div>
              </div>
              <div className='item'>
                <div className="card">
                  <a href="/details.html" className="card__cover">
                    <img src="img/cards/9.jpg" alt="" />
                  </a>

                 

                  <div className="card__title">
                    <h3><a href="/details.html">BioShock Infinite Complete Edition</a></h3>
                    <span>$55.99 <s>$79.99</s></span>
                  </div>

                  <div className="card__actions">
                    <button className="card__buy" type="button">Pre-order</button>

                    <button className="card__favorite" type="button">
                      <svg xmlns='http://www.w3.org/2000/svg' width='512' height='512' viewBox='0 0 512 512'><path d='M352.92,80C288,80,256,144,256,144s-32-64-96.92-64C106.32,80,64.54,124.14,64,176.81c-1.1,109.33,86.73,187.08,183,252.42a16,16,0,0,0,18,0c96.26-65.34,184.09-143.09,183-252.42C447.46,124.14,405.68,80,352.92,80Z'  className="common_svg2"/></svg>
                    </button>
                  </div>
                </div>
              </div>
              <div className='item'>
                <div className="card">
                  <a href="/details.html" className="card__cover">
                    <img src="img/cards/9.jpg" alt="" />
                  </a>

                 

                  <div className="card__title">
                    <h3><a href="/details.html">BioShock Infinite Complete Edition</a></h3>
                    <span>$55.99 <s>$79.99</s></span>
                  </div>

                  <div className="card__actions">
                    <button className="card__buy" type="button">Pre-order</button>

                    <button className="card__favorite" type="button">
                      <svg xmlns='http://www.w3.org/2000/svg' width='512' height='512' viewBox='0 0 512 512'><path d='M352.92,80C288,80,256,144,256,144s-32-64-96.92-64C106.32,80,64.54,124.14,64,176.81c-1.1,109.33,86.73,187.08,183,252.42a16,16,0,0,0,18,0c96.26-65.34,184.09-143.09,183-252.42C447.46,124.14,405.68,80,352.92,80Z'  className="common_svg2"/></svg>
                    </button>
                  </div>
                </div>
              </div>
              <div className='item'>
                <div className="card">
                  <a href="/details.html" className="card__cover">
                    <img src="img/cards/9.jpg" alt="" />
                  </a>

                 

                  <div className="card__title">
                    <h3><a href="/details.html">BioShock Infinite Complete Edition</a></h3>
                    <span>$55.99 <s>$79.99</s></span>
                  </div>

                  <div className="card__actions">
                    <button className="card__buy" type="button">Pre-order</button>

                    <button className="card__favorite" type="button">
                      <svg xmlns='http://www.w3.org/2000/svg' width='512' height='512' viewBox='0 0 512 512'><path d='M352.92,80C288,80,256,144,256,144s-32-64-96.92-64C106.32,80,64.54,124.14,64,176.81c-1.1,109.33,86.73,187.08,183,252.42a16,16,0,0,0,18,0c96.26-65.34,184.09-143.09,183-252.42C447.46,124.14,405.68,80,352.92,80Z'  className="common_svg2"/></svg>
                    </button>
                  </div>
                </div>
              </div>
              <div className='item'>
                <div className="card">
                  <a href="/details.html" className="card__cover">
                    <img src="img/cards/9.jpg" alt="" />
                  </a>

                 

                  <div className="card__title">
                    <h3><a href="/details.html">BioShock Infinite Complete Edition</a></h3>
                    <span>$55.99 <s>$79.99</s></span>
                  </div>

                  <div className="card__actions">
                    <button className="card__buy" type="button">Pre-order</button>

                    <button className="card__favorite" type="button">
                      <svg xmlns='http://www.w3.org/2000/svg' width='512' height='512' viewBox='0 0 512 512'><path d='M352.92,80C288,80,256,144,256,144s-32-64-96.92-64C106.32,80,64.54,124.14,64,176.81c-1.1,109.33,86.73,187.08,183,252.42a16,16,0,0,0,18,0c96.26-65.34,184.09-143.09,183-252.42C447.46,124.14,405.68,80,352.92,80Z'  className="common_svg2"/></svg>
                    </button>
                  </div>
                </div>
              </div>
              <div className='item'>
                <div className="card">
                  <a href="/details.html" className="card__cover">
                    <img src="img/cards/9.jpg" alt="" />
                  </a>

                 

                  <div className="card__title">
                    <h3><a href="/details.html">BioShock Infinite Complete Edition</a></h3>
                    <span>$55.99 <s>$79.99</s></span>
                  </div>

                  <div className="card__actions">
                    <button className="card__buy" type="button">Pre-order</button>

                    <button className="card__favorite" type="button">
                      <svg xmlns='http://www.w3.org/2000/svg' width='512' height='512' viewBox='0 0 512 512'><path d='M352.92,80C288,80,256,144,256,144s-32-64-96.92-64C106.32,80,64.54,124.14,64,176.81c-1.1,109.33,86.73,187.08,183,252.42a16,16,0,0,0,18,0c96.26-65.34,184.09-143.09,183-252.42C447.46,124.14,405.68,80,352.92,80Z'  className="common_svg2"/></svg>
                    </button>
                  </div>
                </div>
              </div>
              <div className='item'>
                <div className="card">
                  <a href="/details.html" className="card__cover">
                    <img src="img/cards/9.jpg" alt="" />
                  </a>

                 

                  <div className="card__title">
                    <h3><a href="/details.html">BioShock Infinite Complete Edition</a></h3>
                    <span>$55.99 <s>$79.99</s></span>
                  </div>

                  <div className="card__actions">
                    <button className="card__buy" type="button">Pre-order</button>

                    <button className="card__favorite" type="button">
                      <svg xmlns='http://www.w3.org/2000/svg' width='512' height='512' viewBox='0 0 512 512'><path d='M352.92,80C288,80,256,144,256,144s-32-64-96.92-64C106.32,80,64.54,124.14,64,176.81c-1.1,109.33,86.73,187.08,183,252.42a16,16,0,0,0,18,0c96.26-65.34,184.09-143.09,183-252.42C447.46,124.14,405.68,80,352.92,80Z'  className="common_svg2"/></svg>
                    </button>
                  </div>
                </div>
              </div>
              
              </OwlCarousel>

          </div>

          {/* <!-- carousel --> */}
          <div className="owl-carousel section__carousel section__carousel--catalog" id="carousel2">
             
            <div className="card">
              <a href="/details.html" className="card__cover">
                <img src="img/cards/6.jpg" alt="" />
              </a>

              <div className="card__title">
                <h3><a href="/details.html">Baldur&apos;s Gate: Enhanced Edition</a></h3>
                <span>$19.99</span>
              </div>

              <div className="card__actions">
                <button className="card__buy" type="button">Pre-order</button>

                <button className="card__favorite" type="button">
                  <svg xmlns='http://www.w3.org/2000/svg' width='512' height='512' viewBox='0 0 512 512'><path d='M352.92,80C288,80,256,144,256,144s-32-64-96.92-64C106.32,80,64.54,124.14,64,176.81c-1.1,109.33,86.73,187.08,183,252.42a16,16,0,0,0,18,0c96.26-65.34,184.09-143.09,183-252.42C447.46,124.14,405.68,80,352.92,80Z'  className="common_svg2"/></svg>
                </button>
              </div>
            </div>
             
            <div className="card">
              <a href="/details.html" className="card__cover">
                <img src="img/cards/1.jpg" alt="" />
              </a>

              <div className="card__title">
                <h3><a href="/details.html">Dandara: Trials of Fear Edition</a></h3>
                <span>$7.99</span>
              </div>

              <div className="card__actions">
                <button className="card__buy" type="button">Pre-order</button>

                <button className="card__favorite" type="button">
                  <svg xmlns='http://www.w3.org/2000/svg' width='512' height='512' viewBox='0 0 512 512'><path d='M352.92,80C288,80,256,144,256,144s-32-64-96.92-64C106.32,80,64.54,124.14,64,176.81c-1.1,109.33,86.73,187.08,183,252.42a16,16,0,0,0,18,0c96.26-65.34,184.09-143.09,183-252.42C447.46,124.14,405.68,80,352.92,80Z'  className="common_svg2"/></svg>
                </button>
              </div>
            </div>
              

             
            <div className="card">
              <a href="/details.html" className="card__cover">
                <img src="img/cards/2.jpg" alt="" />
              </a>

              <div className="card__title">
                <h3><a href="/details.html">SteamWorld Quest: Hand of Gilgamech</a></h3>
                <span>$12.49</span>
              </div>

              <div className="card__actions">
                <button className="card__buy" type="button">Pre-order</button>

                <button className="card__favorite" type="button">
                  <svg xmlns='http://www.w3.org/2000/svg' width='512' height='512' viewBox='0 0 512 512'><path d='M352.92,80C288,80,256,144,256,144s-32-64-96.92-64C106.32,80,64.54,124.14,64,176.81c-1.1,109.33,86.73,187.08,183,252.42a16,16,0,0,0,18,0c96.26-65.34,184.09-143.09,183-252.42C447.46,124.14,405.68,80,352.92,80Z'  className="common_svg2"/></svg>
                </button>
              </div>
            </div>
             

             
            <div className="card">
              <a href="/details.html" className="card__cover">
                <img src="img/cards/9.jpg" alt="" />
              </a>

              <div className="card__title">
                <h3><a href="/details.html">BioShock Infinite Complete Edition</a></h3>
                <span>$55.99 <s>$79.99</s></span>
              </div>

              <div className="card__actions">
                <button className="card__buy" type="button">Pre-order</button>

                <button className="card__favorite" type="button">
                  <svg xmlns='http://www.w3.org/2000/svg' width='512' height='512' viewBox='0 0 512 512'><path d='M352.92,80C288,80,256,144,256,144s-32-64-96.92-64C106.32,80,64.54,124.14,64,176.81c-1.1,109.33,86.73,187.08,183,252.42a16,16,0,0,0,18,0c96.26-65.34,184.09-143.09,183-252.42C447.46,124.14,405.68,80,352.92,80Z'  className="common_svg2"/></svg>
                </button>
              </div>
            </div>
             

             
            <div className="card">
              <a href="/details.html" className="card__cover">
                <img src="img/cards/4.jpg" alt="" />
              </a>

              <div className="card__title">
                <h3><a href="/details.html">Outcast - Second Contact</a></h3>
                <span>$34.99</span>
              </div>

              <div className="card__actions">
                <button className="card__buy" type="button">Pre-order</button>

                <button className="card__favorite" type="button">
                  <svg xmlns='http://www.w3.org/2000/svg' width='512' height='512' viewBox='0 0 512 512'><path d='M352.92,80C288,80,256,144,256,144s-32-64-96.92-64C106.32,80,64.54,124.14,64,176.81c-1.1,109.33,86.73,187.08,183,252.42a16,16,0,0,0,18,0c96.26-65.34,184.09-143.09,183-252.42C447.46,124.14,405.68,80,352.92,80Z'  className="common_svg2"/></svg>
                </button>
              </div>
            </div>
             
          </div>
           
        </section>
         

         
        
         
        <section className="section">
          <div className="container">
            <div className="row">
               
              <div className="col-12">
                <div className="section__title-wrap section__title-wrap--single">
                  <h2 className="section__title">Latest news</h2>

                  <div className="section__nav-wrap">
                    <a href="/news.html" className="section__view">View All</a>
                  </div>
                </div>
              </div>
               

              <div className="col-12 col-md-12 col-lg-6">
                <div className="post post--big">
                  <a href="/article.html" className="post__img">
                    <img src="img/home/demo/latest_news_1.jpg" alt="" />
                  </a>

                  <div className="post__content">
                    <a href="/#" className="post__category">NFS</a>
                    <h3 className="post__title"><a href="/article.html">New hot race from your favorite computer games studio</a></h3>
                    <div className="post__meta">
                      <span className="post__date"><svg xmlns='http://www.w3.org/2000/svg' width='512' height='512' viewBox='0 0 512 512'><path d='M256,64C150,64,64,150,64,256s86,192,192,192,192-86,192-192S362,64,256,64Z'  className="common_svg3"/><polyline points='256 128 256 272 352 272'  className="common_svg2"/></svg> 2 hours ago</span>
                      <span className="post__comments"><svg xmlns='http://www.w3.org/2000/svg' width='512' height='512' viewBox='0 0 512 512'><path d='M431,320.6c-1-3.6,1.2-8.6,3.3-12.2a33.68,33.68,0,0,1,2.1-3.1A162,162,0,0,0,464,215c.3-92.2-77.5-167-173.7-167C206.4,48,136.4,105.1,120,180.9a160.7,160.7,0,0,0-3.7,34.2c0,92.3,74.8,169.1,171,169.1,15.3,0,35.9-4.6,47.2-7.7s22.5-7.2,25.4-8.3a26.44,26.44,0,0,1,9.3-1.7,26,26,0,0,1,10.1,2L436,388.6a13.52,13.52,0,0,0,3.9,1,8,8,0,0,0,8-8,12.85,12.85,0,0,0-.5-2.7Z'  className="common_svg3"/><path d='M66.46,232a146.23,146.23,0,0,0,6.39,152.67c2.31,3.49,3.61,6.19,3.21,8s-11.93,61.87-11.93,61.87a8,8,0,0,0,2.71,7.68A8.17,8.17,0,0,0,72,464a7.26,7.26,0,0,0,2.91-.6l56.21-22a15.7,15.7,0,0,1,12,.2c18.94,7.38,39.88,12,60.83,12A159.21,159.21,0,0,0,284,432.11'  className="common_svg3"/></svg> 17</span>
                    </div>
                  </div>
                </div>
              </div>
               

               
              <div className="col-12 col-md-12 col-lg-6">
                <div className="post post--big">
                  <a href="/interview.html" className="post__img">
                    <img src="img/home/demo/latest_news_2.jpg" alt="" />
                  </a>

                  <a href="/http://www.youtube.com/watch?v=0O2aH4XLbto" className="post__video">
                    <svg xmlns='http://www.w3.org/2000/svg' width='512' height='512' viewBox='0 0 512 512'><path d='M112,111V401c0,17.44,17,28.52,31,20.16l247.9-148.37c12.12-7.25,12.12-26.33,0-33.58L143,90.84C129,82.48,112,93.56,112,111Z'  className="common_svg3"/></svg>
                  </a>

                  <div className="post__content">
                    <a href="/#" className="post__category">CS:GO</a>
                    <h3 className="post__title"><a href="/interview.html">Top 20 CS:GO players of 2020 according to HOTFLIX.tv</a></h3>
                    <div className="post__meta">
                      <span className="post__date"><svg xmlns='http://www.w3.org/2000/svg' width='512' height='512' viewBox='0 0 512 512'><path d='M256,64C150,64,64,150,64,256s86,192,192,192,192-86,192-192S362,64,256,64Z'  className="common_svg3"/><polyline points='256 128 256 272 352 272'  className="common_svg2"/></svg> 3 hours ago</span>
                      <span className="post__comments"><svg xmlns='http://www.w3.org/2000/svg' width='512' height='512' viewBox='0 0 512 512'><path d='M431,320.6c-1-3.6,1.2-8.6,3.3-12.2a33.68,33.68,0,0,1,2.1-3.1A162,162,0,0,0,464,215c.3-92.2-77.5-167-173.7-167C206.4,48,136.4,105.1,120,180.9a160.7,160.7,0,0,0-3.7,34.2c0,92.3,74.8,169.1,171,169.1,15.3,0,35.9-4.6,47.2-7.7s22.5-7.2,25.4-8.3a26.44,26.44,0,0,1,9.3-1.7,26,26,0,0,1,10.1,2L436,388.6a13.52,13.52,0,0,0,3.9,1,8,8,0,0,0,8-8,12.85,12.85,0,0,0-.5-2.7Z'  className="common_svg3"/><path d='M66.46,232a146.23,146.23,0,0,0,6.39,152.67c2.31,3.49,3.61,6.19,3.21,8s-11.93,61.87-11.93,61.87a8,8,0,0,0,2.71,7.68A8.17,8.17,0,0,0,72,464a7.26,7.26,0,0,0,2.91-.6l56.21-22a15.7,15.7,0,0,1,12,.2c18.94,7.38,39.88,12,60.83,12A159.21,159.21,0,0,0,284,432.11'  className="common_svg3"/></svg> 11</span>
                    </div>
                  </div>
                </div>
              </div>
               

               
              <div className="col-12 col-md-6 col-xl-4">
                <div className="post">
                  <a href="/interview.html" className="post__cover">
                    <img src="img/home/demo/latest_news_3.jpg" alt="" />
                  </a>

                  <a href="/http://www.youtube.com/watch?v=0O2aH4XLbto" className="post__video">
                    <svg xmlns='http://www.w3.org/2000/svg' width='512' height='512' viewBox='0 0 512 512'><path d='M112,111V401c0,17.44,17,28.52,31,20.16l247.9-148.37c12.12-7.25,12.12-26.33,0-33.58L143,90.84C129,82.48,112,93.56,112,111Z'  className="common_svg3"/></svg>
                  </a>

                  <div className="post__content">
                    <a href="/#" className="post__category">Overview</a>
                    <h3 className="post__title"><a href="/interview.html">Updated and customized gamepad</a></h3>
                    <div className="post__meta">
                      <span className="post__date"><svg xmlns='http://www.w3.org/2000/svg' width='512' height='512' viewBox='0 0 512 512'><path d='M256,64C150,64,64,150,64,256s86,192,192,192,192-86,192-192S362,64,256,64Z'  className="common_svg3"/><polyline points='256 128 256 272 352 272'  className="common_svg2"/></svg> 4 hours ago</span>
                      <span className="post__comments"><svg xmlns='http://www.w3.org/2000/svg' width='512' height='512' viewBox='0 0 512 512'><path d='M431,320.6c-1-3.6,1.2-8.6,3.3-12.2a33.68,33.68,0,0,1,2.1-3.1A162,162,0,0,0,464,215c.3-92.2-77.5-167-173.7-167C206.4,48,136.4,105.1,120,180.9a160.7,160.7,0,0,0-3.7,34.2c0,92.3,74.8,169.1,171,169.1,15.3,0,35.9-4.6,47.2-7.7s22.5-7.2,25.4-8.3a26.44,26.44,0,0,1,9.3-1.7,26,26,0,0,1,10.1,2L436,388.6a13.52,13.52,0,0,0,3.9,1,8,8,0,0,0,8-8,12.85,12.85,0,0,0-.5-2.7Z'  className="common_svg3"/><path d='M66.46,232a146.23,146.23,0,0,0,6.39,152.67c2.31,3.49,3.61,6.19,3.21,8s-11.93,61.87-11.93,61.87a8,8,0,0,0,2.71,7.68A8.17,8.17,0,0,0,72,464a7.26,7.26,0,0,0,2.91-.6l56.21-22a15.7,15.7,0,0,1,12,.2c18.94,7.38,39.88,12,60.83,12A159.21,159.21,0,0,0,284,432.11'  className="common_svg3"/></svg> 14</span>
                    </div>
                  </div>
                </div>
              </div>
               

               
              <div className="col-12 col-md-6 col-xl-4">
                <div className="post">
                  <a href="/article.html" className="post__img">
                    <img src="img/home/demo/latest_news_4.jpg" alt="" />
                  </a>

                  <div className="post__content">
                    <a href="/#" className="post__category">PC</a>
                    <h3 className="post__title"><a href="/article.html">Gaming computer RXZ-3000 Ultra with revolutionary..</a></h3>
                    <div className="post__meta">
                      <span className="post__date"><svg xmlns='http://www.w3.org/2000/svg' width='512' height='512' viewBox='0 0 512 512'><path d='M256,64C150,64,64,150,64,256s86,192,192,192,192-86,192-192S362,64,256,64Z'  className="common_svg3"/><polyline points='256 128 256 272 352 272'  className="common_svg2"/></svg> 2 hours ago</span>
                      <span className="post__comments"><svg xmlns='http://www.w3.org/2000/svg' width='512' height='512' viewBox='0 0 512 512'><path d='M431,320.6c-1-3.6,1.2-8.6,3.3-12.2a33.68,33.68,0,0,1,2.1-3.1A162,162,0,0,0,464,215c.3-92.2-77.5-167-173.7-167C206.4,48,136.4,105.1,120,180.9a160.7,160.7,0,0,0-3.7,34.2c0,92.3,74.8,169.1,171,169.1,15.3,0,35.9-4.6,47.2-7.7s22.5-7.2,25.4-8.3a26.44,26.44,0,0,1,9.3-1.7,26,26,0,0,1,10.1,2L436,388.6a13.52,13.52,0,0,0,3.9,1,8,8,0,0,0,8-8,12.85,12.85,0,0,0-.5-2.7Z'  className="common_svg3"/><path d='M66.46,232a146.23,146.23,0,0,0,6.39,152.67c2.31,3.49,3.61,6.19,3.21,8s-11.93,61.87-11.93,61.87a8,8,0,0,0,2.71,7.68A8.17,8.17,0,0,0,72,464a7.26,7.26,0,0,0,2.91-.6l56.21-22a15.7,15.7,0,0,1,12,.2c18.94,7.38,39.88,12,60.83,12A159.21,159.21,0,0,0,284,432.11'  className="common_svg3"/></svg> 18</span>
                    </div>
                  </div>
                </div>
              </div>
               

               
              <div className="col-12 col-md-6 col-xl-4">
                <div className="post">
                  <a href="/article.html" className="post__img">
                    <img src="img/home/demo/latest_news_5.jpg" alt="" />
                  </a>

                  <div className="post__content">
                    <a href="/#" className="post__category">VR</a>
                    <h3 className="post__title"><a href="/article.html">Augmented reality (AR) and Virtual Reality (VR) bridge..</a></h3>
                    <div className="post__meta">
                      <span className="post__date"><svg xmlns='http://www.w3.org/2000/svg' width='512' height='512' viewBox='0 0 512 512'><path d='M256,64C150,64,64,150,64,256s86,192,192,192,192-86,192-192S362,64,256,64Z'  className="common_svg3"/><polyline points='256 128 256 272 352 272'  className="common_svg2"/></svg> 9 hours ago</span>
                      <span className="post__comments"><svg xmlns='http://www.w3.org/2000/svg' width='512' height='512' viewBox='0 0 512 512'><path d='M431,320.6c-1-3.6,1.2-8.6,3.3-12.2a33.68,33.68,0,0,1,2.1-3.1A162,162,0,0,0,464,215c.3-92.2-77.5-167-173.7-167C206.4,48,136.4,105.1,120,180.9a160.7,160.7,0,0,0-3.7,34.2c0,92.3,74.8,169.1,171,169.1,15.3,0,35.9-4.6,47.2-7.7s22.5-7.2,25.4-8.3a26.44,26.44,0,0,1,9.3-1.7,26,26,0,0,1,10.1,2L436,388.6a13.52,13.52,0,0,0,3.9,1,8,8,0,0,0,8-8,12.85,12.85,0,0,0-.5-2.7Z'  className="common_svg3"/><path d='M66.46,232a146.23,146.23,0,0,0,6.39,152.67c2.31,3.49,3.61,6.19,3.21,8s-11.93,61.87-11.93,61.87a8,8,0,0,0,2.71,7.68A8.17,8.17,0,0,0,72,464a7.26,7.26,0,0,0,2.91-.6l56.21-22a15.7,15.7,0,0,1,12,.2c18.94,7.38,39.88,12,60.83,12A159.21,159.21,0,0,0,284,432.11'  className="common_svg3"/></svg> 50</span>
                    </div>
                  </div>
                </div>
              </div>
               
            </div>
          </div>
        </section>
         
        <div className="section section--last">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <OwlCarousel className='owl-theme partners' responsiveClass responsive={responsive4} loop margin={10} nav={false} items={6} dots={false}>
                  <div className='item'>
                    <a href="/#" className="partners__img">
                      <img src="img/partners/3docean-light-background.png" alt="" />
                    </a>
                  </div>
                  <div className='item'>
                    <a href="/#" className="partners__img">
                      <img src="img/partners/3docean-light-background.png" alt="" />
                    </a>
                  </div>
                  <div className='item'>
                    <a href="/#" className="partners__img">
                      <img src="img/partners/3docean-light-background.png" alt="" />
                    </a>
                  </div>
                  <div className='item'>
                    <a href="/#" className="partners__img">
                      <img src="img/partners/3docean-light-background.png" alt="" />
                    </a>
                  </div>
                  <div className='item'>
                    <a href="/#" className="partners__img">
                      <img src="img/partners/3docean-light-background.png" alt="" />
                    </a>
                  </div>
                  <div className='item'>
                    <a href="/#" className="partners__img">
                      <img src="img/partners/3docean-light-background.png" alt="" />
                    </a>
                  </div>
                  <div className='item'>
                    <a href="/#" className="partners__img">
                      <img src="img/partners/3docean-light-background.png" alt="" />
                    </a>
                  </div>
                  <div className='item'>
                    <a href="/#" className="partners__img">
                      <img src="img/partners/3docean-light-background.png" alt="" />
                    </a>
                  </div>
                  <div className='item'>
                    <a href="/#" className="partners__img">
                      <img src="img/partners/3docean-light-background.png" alt="" />
                    </a>
                  </div>
                  <div className='item'>
                    <a href="/#" className="partners__img">
                      <img src="img/partners/3docean-light-background.png" alt="" />
                    </a>
                  </div>
                </OwlCarousel>
              </div>
            </div>
          </div>
        </div>
        <Footer/>
      </div>
  )
}

export default Home
