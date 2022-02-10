import React from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'


import {
  IconLookup,
  IconDefinition,
  findIconDefinition
} from '@fortawesome/fontawesome-svg-core'




const coffeeLookup: IconLookup = { prefix: 'fas', iconName: 'coffee' }
const coffeeIconDefinition: IconDefinition = findIconDefinition(coffeeLookup)




const Content: React.FC = () => {
    return (
        <div className="container create-collectible center">
          
            <div className="row label-go-back col-md-12">
              <Link to="/" className="text-left white"><FontAwesomeIcon icon={faArrowLeft} />&nbsp;Go Back</Link>
            </div>
            <br />
            <div className="row text-left white col-md-12">
              <h1>Create collectible</h1>
            </div>
            
            <div className="row col-md-12">
              <p className="p-grey">Choose “Single” if you want your collectible to be one of a kind or “Multiple” if you want to sell one collectible multiple times

              </p>

            </div>

            <div className="row nft-group text-center col-md-12">
              <div className="col-md-6">
                <Link to="/create/erc721">
                  <div className="create-item">
                    <img src="img/create/single.png" className="img-create" alt="" />
                    <p className="label-nft-group">Single</p>
                  </div>
                </Link>
                
              </div>
              
                <div className="col-md-6">
                  <Link to="/create/erc1155">
                    <div className="create-item">
                      <img src="img/create/multi.png" className="img-create" alt="" />
                      <p className="label-nft-group">Multiple</p>
                    </div>
                    </Link>
                </div>
              
            </div>

            <div className="col-md-12 white create-note">
              <p>We do not own your private keys and cannot access your funds without your confirmation</p>
            </div>

        </div>
    )
  }

  export default Content