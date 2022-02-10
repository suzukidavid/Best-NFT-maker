import React from 'react'
import Menu from '../../../components/Menu'
import Footer from '../../../components/Footer'

const News: React.FC = () => {

  return (
    <div className="sign section--full-bg" data-bg="img/bg2.jpg">
		<div className="container">
			<div className="row">
				<div className="col-12">
					<div className="sign__content">
						<form action="/" className="sign__form">
							<a href="index.html" className="sign__logo">
								<img src="img/logo.svg" alt="" />
							</a>

							<div className="sign__group">
								<input type="text" className="sign__input" placeholder="Name" />
							</div>

							<div className="sign__group">
								<input type="text" className="sign__input" placeholder="Email" />
							</div>

							<div className="sign__group">
								<input type="password" className="sign__input" placeholder="Password" />
							</div>

							<div className="sign__group sign__group--checkbox">
								<input id="remember" name="remember" type="checkbox" defaultChecked />
								<label htmlFor="remember">
									I agree to the <a href="/privacy.html">Privacy Policy
									<input id="empty" name="empty" />
									</a>
								</label>
							</div>
							
							<button className="sign__btn" type="button">Sign up</button>

							<span className="sign__delimiter">or</span>

							<div className="sign__social">
								<a className="fb" href="/">
									<svg xmlns='http://www.w3.org/2000/svg' width='512' height='512' viewBox='0 0 512 512'><path d='M455.27,32H56.73A24.74,24.74,0,0,0,32,56.73V455.27A24.74,24.74,0,0,0,56.73,480H256V304H202.45V240H256V189c0-57.86,40.13-89.36,91.82-89.36,24.73,0,51.33,1.86,57.51,2.68v60.43H364.15c-28.12,0-33.48,13.3-33.48,32.9V240h67l-8.75,64H330.67V480h124.6A24.74,24.74,0,0,0,480,455.27V56.73A24.74,24.74,0,0,0,455.27,32Z'/>
									</svg>
								</a>
								<a className="tw" href="/">
									<svg xmlns='http://www.w3.org/2000/svg' width='512' height='512' viewBox='0 0 512 512'>
										<path d='M496,109.5a201.8,201.8,0,0,1-56.55,15.3,97.51,97.51,0,0,0,43.33-53.6,197.74,197.74,0,0,1-62.56,23.5A99.14,99.14,0,0,0,348.31,64c-54.42,0-98.46,43.4-98.46,96.9a93.21,93.21,0,0,0,2.54,22.1,280.7,280.7,0,0,1-203-101.3A95.69,95.69,0,0,0,36,130.4C36,164,53.53,193.7,80,211.1A97.5,97.5,0,0,1,35.22,199v1.2c0,47,34,86.1,79,95a100.76,100.76,0,0,1-25.94,3.4,94.38,94.38,0,0,1-18.51-1.8c12.51,38.5,48.92,66.5,92.05,67.3A199.59,199.59,0,0,1,39.5,405.6,203,203,0,0,1,16,404.2,278.68,278.68,0,0,0,166.74,448c181.36,0,280.44-147.7,280.44-275.8,0-4.2-.11-8.4-.31-12.5A198.48,198.48,0,0,0,496,109.5Z'/>
									</svg>
								</a>
								<a className="gl" href="/">
									<svg xmlns='http://www.w3.org/2000/svg' className='ionicon' viewBox='0 0 512 512'>
										<path d='M473.16 221.48l-2.26-9.59H262.46v88.22H387c-12.93 61.4-72.93 93.72-121.94 93.72-35.66 0-73.25-15-98.13-39.11a140.08 140.08 0 01-41.8-98.88c0-37.16 16.7-74.33 41-98.78s61-38.13 97.49-38.13c41.79 0 71.74 22.19 82.94 32.31l62.69-62.36C390.86 72.72 340.34 32 261.6 32c-60.75 0-119 23.27-161.58 65.71C58 139.5 36.25 199.93 36.25 256s20.58 113.48 61.3 155.6c43.51 44.92 105.13 68.4 168.58 68.4 57.73 0 112.45-22.62 151.45-63.66 38.34-40.4 58.17-96.3 58.17-154.9 0-24.67-2.48-39.32-2.59-39.96z'/>
									</svg>
								</a>
							</div>

							<span className="sign__text">Already have an account? <a href="signin.html">Sign in!</a></span>
						</form>
					</div>
				</div>
			</div>
		</div>
	</div>  
	)
}

export default News
