import React, { useEffect, Suspense, lazy } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { useWallet } from '@binance-chain/bsc-use-wallet'
import PageLoader from './components/PageLoader'


const Home = lazy(() => import('./views/Home'))
const Signin = lazy(() => import('./views/User/Signin'))
const Signup = lazy(() => import('./views/User/Signup'))
const Category = lazy (() => import('./views/Category'))
const Catalog = lazy (() => import('./views/Catalog'))
const News = lazy (() => import('./views/News'))
const Article = lazy (() => import('./views/Article'))
const Gallery = lazy (() => import('./views/Gallery'))
const Interview = lazy (() => import('./views/Interview'))
const FAQ = lazy (() => import('./views/FAQ'))
const CheckOut = lazy (() => import('./views/CheckOut'))
const Favorites = lazy ( () => import('./views/Favorites'))
const About = lazy ( () => import('./views/About'))
const Profile = lazy ( () => import('./views/Profile'))
const Privacy = lazy ( () => import('./views/Privacy'))
const Contact = lazy ( () => import('./views/Contact'))
const NotFound = lazy(() => import('./views/NotFound'))
const Create = lazy(() => import ("./views/Create"))
const Create721 = lazy(() => import ("./views/Create/Create721"))
const Create1155 = lazy(() => import ("./views/Create/Create1155"))

const App: React.FC = () => {
  
  const { account, connect } = useWallet()
  useEffect(() => {
    if (!account && window.localStorage.getItem('accountStatus')) {
      connect('injected')
    }
  }, [account, connect])

  return (
    <Router>
        <Suspense fallback={<PageLoader />}>
          <Switch>
            <Route path="/" exact>
              <Home />
            </Route>
            <Route exact path="/signin" >
              <Signin />
            </Route>
            <Route exact path="/signup" >
              <Signup />
            </Route>
            <Route exact path="/gallery">
              <Gallery/>
            </Route>
            <Route exact path="/contact">
              <Contact/>
            </Route>
            <Route exact  path="/create">
              <Create />
            </Route>
            <Route exact path="/create/erc721">
              <Create721/>
            </Route>
            <Route exact path="/create/erc1155">
              <Create1155/>
            </Route>
            {/* 404 */}
            <Route component={NotFound} />
          </Switch>
        </Suspense>
    </Router>
  )
}

export default React.memo(App)
