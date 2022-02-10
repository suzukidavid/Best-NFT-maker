import React, { useEffect, useState } from 'react'
import { useWallet } from '@binance-chain/bsc-use-wallet'
import { useWalletModal } from '@pizzafinance/ui-sdk'
import { Link } from 'react-router-dom'
import ConnectButton from './ConnectButton'

const Menu: React.FC = () => {
    const { account } = useWallet()
	const [ showModal, setShowModal] = useState(false)
	const { connect, reset } = useWallet()
  	const { onPresentConnectModal, onPresentAccountModal } = useWalletModal(connect, reset)
	const [headerMenuActive, setHeaderMenuActive] = useState(false)
	const toggleMenu = () => {
		setHeaderMenuActive(!headerMenuActive);
	}

    return (		
        <header className="header">
			<div className="header__wrap">
				<div className="container">
					<div className="row">
						<div className="col-12">
							<div className="header__content">
								<button className={ headerMenuActive?"header__menu header__menu--active" : 'header__menu' } type="button" onClick={toggleMenu}>
									<span> </span>
									<span> </span>
									<span> </span>
								</button>

								<Link to="/" className="header__logo">
									<img src="img/logo.svg" alt=""/>
								</Link>

								<ul className={ headerMenuActive?"header__nav header__nav--active" : 'header__nav' }>
									<li className="header__nav-item">
										<Link to="/" className = "header__nav-link" href="/create" role="button" >Home</Link>
									</li>
									<li className="header__nav-item">
										<Link to="/create" className = "header__nav-link" href="/create" role="button" >Create</Link>
									</li>
									<li className = "header__nav-item">
										<Link to="/gallery" className = "header__nav-link" href="/create" role="button" >Gallery</Link>
									</li>
									<li className="header__nav-item">
										<Link to="/contact" className = "header__nav-link" href="/create" role="button" >CONTACTS</Link>
									</li>
									<li className="header__nav-item">
										<a className="header__nav-link header__nav-link--more" href="/" role="button" id="dropdownMenu3" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
											<svg xmlns='http://www.w3.org/2000/svg' width='512' height='512' viewBox='0 0 512 512'>
												<circle cx='256' cy='256' r='32' className="header__nav-link_circle" />
												<circle cx='416' cy='256' r='32' className="header__nav-link_circle" />
												<circle cx='96' cy='256' r='32' className="header__nav-link_circle" />
											</svg>
										</a>

										<ul className="dropdown-menu header__nav-menu header__nav-menu--scroll" aria-labelledby="dropdownMenu3">
											<li><a href="checkout.html">Checkout</a></li>
											<li><a href="favorites.html">Favorites</a></li>
											<li><a href="about.html">About</a></li>
											<li><a href="profile.html">Profile</a></li>
											<li><a href="signin.html">Sign in</a></li>
											<li><a href="signup.html">Sign up</a></li>
											<li><a href="forgot.html">Forgot password</a></li>
											<li><a href="privacy.html">Privacy policy</a></li>
											<li><a href="contacts.html">Contacts</a></li>
											<li><a href="404.html">404 Page</a></li>
										</ul>
									</li>
								</ul>

								<div className="header__actions">
									<div className="header__lang">
										<a className="header__lang-btn" href="/" role="button" id="dropdownMenuLang" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
											<img src="img/flags/uk.svg" alt="" />
											<span>EN</span>
											<svg xmlns='http://www.w3.org/2000/svg' width='512' height='512' viewBox='0 0 512 512'>
												<path d='M98,190.06,237.78,353.18a24,24,0,0,0,36.44,0L414,190.06c13.34-15.57,2.28-39.62-18.22-39.62H116.18C95.68,150.44,84.62,174.49,98,190.06Z'/>
											</svg>
										</a>

										<ul className="dropdown-menu header__lang-menu" aria-labelledby="dropdownMenuLang">
											<li><a href="/"><img src="img/flags/spain.svg" alt="" /><span>SP</span></a></li>
											<li><a href="/"><img src="img/flags/russia.svg" alt="" /><span>RU</span></a></li>
											<li><a href="/"><img src="img/flags/china.svg" alt="" /><span>CH</span></a></li>
										</ul>
									</div>

									<ConnectButton account = {account} />

									<Link to='/signin' className="header__login">
										<svg xmlns='http://www.w3.org/2000/svg' width='512' height='512' viewBox='0 0 512 512'>
											<path className="header__login_path" d='M192,176V136a40,40,0,0,1,40-40H392a40,40,0,0,1,40,40V376a40,40,0,0,1-40,40H240c-22.09,0-48-17.91-48-40V336' />
											<polyline className="header__login_polyline" points='288 336 368 256 288 176' />
											<line className="header__login_line" x1='80' y1='256' x2='352' y2='256' />
										</svg>
										<span>Sign in</span>
									</Link>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>

		<div className="header__wrap">
			<div className="container">
				<div className="row">
					<div className="col-12">
						<div className="header__content">
							<form className="header__form">
								<input type="text" className="header__input" placeholder="I'm searching for..." />
								<select className="header__select">
									<option value="0">All Categories</option>
									<option value="1">Action</option>
									<option value="3">Adventure</option>
									<option value="4">Fighting</option>
									<option value="5">Flight simulation</option>
									<option value="6">Platform</option>
									<option value="7">Racing</option>
									<option value="8">RPG</option>
									<option value="9">Sports</option>
									<option value="10">Strategy</option>
									<option value="11">Survival horror</option>
								</select>
								<button className="header__btn" type="button">
									<svg xmlns='http://www.w3.org/2000/svg' width='512' height='512' viewBox='0 0 512 512'>
										<path d='M221.09,64A157.09,157.09,0,1,0,378.18,221.09,157.1,157.1,0,0,0,221.09,64Z' />
										<line x1='338.29' y1='338.29' x2='448' y2='448' className="header__btn_line" />
									</svg>
								</button>
							</form>

							<div className="header__actions header__actions--2">
								<a href="favorites.html" className="header__link">
									<svg xmlns='http://www.w3.org/2000/svg' width='512' height='512' viewBox='0 0 512 512'><path d='M352.92,80C288,80,256,144,256,144s-32-64-96.92-64C106.32,80,64.54,124.14,64,176.81c-1.1,109.33,86.73,187.08,183,252.42a16,16,0,0,0,18,0c96.26-65.34,184.09-143.09,183-252.42C447.46,124.14,405.68,80,352.92,80Z' className="path_1" /> </svg>
									<span>Favorites</span>
								</a>

								<a href="checkout.html" className="header__link">
									<svg xmlns='http://www.w3.org/2000/svg' className="checkout_svg" width='512' height='512' viewBox='0 0 512 512'><circle cx='176' cy='416' r='16' />
									<circle cx='400' cy='416' r='16' className="checkout_circle" />
									<polyline points='48 80 112 80 160 352 416 352' className="checkout_polyline" /><path d='M160,288H409.44a8,8,0,0,0,7.85-6.43l28.8-144a8,8,0,0,0-7.85-9.57H128' className="path_2" /></svg>
									<span>$00.00</span>
								</a>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</header>
    )
  }
  export default Menu