import React, { useCallback, useEffect, useMemo, useState, useContext,  } from 'react'
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import Switch from '@material-ui/core/Switch'
import IconButton from '@material-ui/core/IconButton';
import { useDropzone } from 'react-dropzone';
import Button from '@material-ui/core/Button';

import { fade,
  ThemeProvider,
  withStyles,
  makeStyles,
  createMuiTheme, } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';


import {
  IconLookup,
  IconDefinition,
  findIconDefinition
} from '@fortawesome/fontawesome-svg-core'
import { useWallet } from '@binance-chain/bsc-use-wallet'
import DropzoneComponent from '../components/DropzoneComponent';
import ConnectButton from '../components/ConnectButton'



import { nftFileupload } from '../../network/api'
import { ContentContext } from '../../../contexts/ContentContext'
import { useMultiAddToken } from '../../../hooks/useMint'


function Form({
  errors,
  handleBlur,
  handleChange,
  handleSubmit,
  touched,
  values,
}){

const coffeeLookup: IconLookup = { prefix: 'fas', iconName: 'coffee' }
const coffeeIconDefinition: IconDefinition = findIconDefinition(coffeeLookup)

const CssTextField = withStyles({
  root: {
    '& label.Mui-focused': {
      color: 'white',
      width: '100%',
    },
    '& .MuiInput-underline:after': {
      borderBottomColor: 'white',
      color:'white',
      width: '100%',
      marginLeft:'0',
    },
    '& .MuiTextField-root': {
      width: '100%',
      marginLeft:'0',
    },
    '& .MuiInput-underline:before': {
      borderBottomColor: 'white',
      color:'white',
      width: '100%',
      marginLeft:'0',
    },
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        borderColor: 'white',
        color:'white',
        width: '100%',
        marginLeft:'0',
      },
      '&:hover fieldset': {
        borderColor: 'white',
        color:'white',
        width: '100%',
        marginLeft:'0',
      },
      '&.Mui-focused fieldset': {
        borderColor: 'white',
        color:'white',
        width: '100%',
        marginLeft:'0',
      },
    },
  },
})(TextField);


  const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      flexWrap: 'wrap',
    },
    margin: {
      margin: theme.spacing(1),
      color:'white',
    },
  }));
  

  const classes = useStyles();

  const [state, setState] = React.useState({
    checkedA: true,
    checkedB: false,
    checkedC: false,
  });

  const class1 = "label-description col-md-8 ml-0 pl-0 mt--1 mb-1"
  const class2 = "label-description col-md-8 ml-0 pl-0 mt--1 mb-1"

  const putSaleHandleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
    
  };

  const instantSaleHandleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
    const state1 = state.checkedA && state.checkedB

    if(!state1)
     document.getElementById('unlockPurchase').classList.add('mt-5')
    else
     document.getElementById('unlockPurchase').classList.remove('mt-5')

  };

  const unlockHandleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };

  const { account } = useWallet()

const [files, setFiles] = useState([]);

  const onDrop = useCallback(acceptedFiles => {
    setFiles(acceptedFiles.map(file => Object.assign(file, {
      preview: URL.createObjectURL(file)
    })));
  }, []);

  const {
    getRootProps,
    getInputProps,
    isDragActive,
    isDragAccept,
    isDragReject
  } = useDropzone({
    onDrop,
    accept: 'image/jpeg, image/png'

    
  });


  const { walletId } = useContext(ContentContext)
  const cateArray = ["Select Category", "Art", "Video", "Podcast", "Sports", "Tickets", "Music", "Gaming"];
  const typeArray = ["Nothing", "Sell", "Auction"];
  const [subScription, setSubscription] = useState("");
  const [fileUrl, setFileUrl] = React.useState("");
  const [loadImage, setLoadImage] = React.useState("");
  const [uploadFile, setUploadFile] = React.useState(null);
  const [uploadImage, setUploadImage] = useState(null);
  const [nftName, setNftname] = useState("");
  const [category, setCategory] = useState("");
  const [sellType, setSellType] = useState("Nothing");
  const [price, setPrice] = useState(-1);
  const [isPrice, setIsPrice] = useState(false);
  const [fileExt, setFileExt] = React.useState("");
  


  const selectNftFile = (event) => {
    setUploadFile(event.target.files[0])
    setLoadImage(URL.createObjectURL(event.target.files[0]))
    setFileUrl(URL.createObjectURL(event.target.files[0]))
    const len = event.target.files[0].type.split("/").length
    setFileExt(event.target.files[0].type.split("/")[len-1])
  }

  const selectImageFile = (event) => {
    setUploadImage(event.target.files[0]);
    setLoadImage(URL.createObjectURL(event.target.files[0]));
  }

  // clean up
  useEffect(() => () => {
    files.forEach(file => URL.revokeObjectURL(file.preview));
  }, [files]);
  const [receiveEther, setReceiveEther] = useState('0')
  const [valueEther, setValueEther] = useState('0.00')
  // const {getEthPriceNow,getEthPriceHistorical}= require('get-eth-price');


  // InstantSale Only Number
  const [instantSale, setInstantSale] = useState('') 
  const [etherTOusd, setEtherTOusd] = useState('0.00')
  let pubEtherPrice = 0
  const componentDidMount = () => {
    fetch('https://api.etherscan.io/api?module=stats&action=ethprice&apikey=YourApiKeyToken')
      .then(response => response.json())
      .then(data => {
          if(data.status === '1'){
            pubEtherPrice = data.result.ethusd
            setEtherTOusd(data.status === '1' ? data.result.ethusd : pubEtherPrice)
          }
        }
      )

  }

  const numberWithCommas = (x) => {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }

  const onHandleInstantSale = (e) => {

        const instantSaleValue = e.target.value;
      
        componentDidMount()

        const re = /^[0-9.\b]+$/

        // if value is not blank, then test the regex
        if (instantSaleValue === '' || re.test(instantSaleValue)) {
            setPrice(instantSaleValue)
            const tValue = instantSaleValue - instantSaleValue * 2.5 / 100
            setInstantSale(instantSaleValue)
            setReceiveEther(numberWithCommas(tValue.toString().substring(0, tValue.toString().indexOf('.') + 4)))
            console.log(etherTOusd)
            setValueEther(etherTOusd === (undefined || '0.00') ? '0.00' : numberWithCommas((Number.parseInt(etherTOusd) * tValue).toString().substring(0, (Number.parseInt(etherTOusd) * tValue).toString().indexOf('.') + 4)))
        }
  }

  // Royality Only Number
  const [ royalties, setRoyalties] = useState(10) 
  const onHandleRoyalties = (e) => {
    const  royaltiesValue = e.target.value;
        // if value is not blank, then test the regex
        if ( royaltiesValue === '' || Number( royaltiesValue)) {
          setRoyalties(royaltiesValue)
        }
  }

  // Count Only Number
  const [ count, setCount] = useState(10) 
  const onHandleCount = (e) => {
    const  countValue = e.target.value;
        // if value is not blank, then test the regex
        if ( countValue === '' || Number( countValue)) {
          setCount(countValue)
        }
  }



  const { onAddToken } = useMultiAddToken()

  return (
    <div className="container create-collectible center">
          <div className="row label-go-back col-md-12">
            <Link to="/create" className="text-left white"><FontAwesomeIcon icon={faArrowLeft} />&nbsp;Manage collectible type</Link>
          </div>
          <br />
          <div className="row text-left white col-md-12 mb-2">
            <h1>Create multiple collectible</h1>
            <Button variant='contained' id='btn-add-token' className='primary' onClick={onAddToken}>Add Multi Token</Button>
          </div>
          <form onSubmit={handleSubmit} autoComplete="off">
          <div className="row col-md-12 white mt-1 label-create" style={{marginBottom:'12px'}}>
            <b>Upload file</b>
          </div>

          {/* Dropzone file */}

          <section>
            <div id="dropZone" {...getRootProps()}>
              <input {...getInputProps()} 
              
                
                onChange={(event) => selectNftFile(event)} 
                required
              
              
              />
              <div className="img-font" style={{color:'white'}}>PNG, GIF, WEBP, MP4 or MP3. Max 30mb.
                <br />
                <Button variant="contained" color="primary" id="btn-file">
                  Select File
                </Button>
              </div>
              {loadImage.length > 0 && (
                  <img src={loadImage} alt="img" className="nft-load-image" />
              )}
            </div>
            
          </section>

          {errors.nftfile && touched.nftfile && <div className="form-valid-notify">{errors.nftfile}</div>}
          <div className="mt-2">
            <div className="row white col-md-11 left label-create" >
                <b>Put on sale</b>
            </div>
            <div className="row white" >
              <Switch
                checked={state.checkedA}
                onChange={putSaleHandleChange}
                color="primary"
                name="checkedA"
                inputProps={{ 'aria-label': 'primary checkbox' }}
              />
            </div>
          </div>

          <div className="left label-description mt--1" >
              <p>You’ll receive bids on this item</p>
          </div>

          { state.checkedA &&  
            <div className="mt-2" id="instant-sale">
                <div className="row white col-md-11 left label-create" >
                    <b>Price</b>
                </div>
            </div>
          }

          { state.checkedA ? 
            <div className="mb-2" id="instantSaleValue">
                <div className="label-description col-md-8 ml-0 pl-0" >
                  <div className="MuiInputBase-root MuiInput-root MuiInput-underline MuiInputBase-formControl MuiInput-formControl">
                    <input
                      className="MuiInputBase-input MuiInput-input"
                      type="text"
                      name="inputInstantSale"
                      id="inputInstantSale"
                      placeholder='Enter price for one piece'
                      value={instantSale}
                      onChange={onHandleInstantSale}
                    />
                  </div>
                </div>
                <div className="label-description" >
                    <p>Service fee <b className='white'>2.5%</b><br />You will receive <b className='white'>{receiveEther} ETH</b>  ${valueEther}</p>
                </div>
            </div> : ' '
          }
          
          <div className="mt-2-1">
            <div className="row white col-md-11 left label-create" >
                <b>Unlock once purchased</b>
            </div>

            <div className="row white" id="unlockPurchase">
              <Switch
                checked={state.checkedC}
                onChange={unlockHandleChange}
                color="primary"
                name="checkedC"
                inputProps={{ 'aria-label': 'primary checkbox' }}
              />
            </div>
          </div>
          <div className="left label-description mt--1" >
              <p>Content will be unlocked after successful transaction</p>
          </div>

          { state.checkedC && 
            <div className="mb-2" id="UnlockPurchase">
                <div className="left label-description col-md-8 ml-0 pl-0 mt--1 mb-2" >
                  <div className='MuiInputBase-root MuiInput-root MuiInput-underline MuiInputBase-formControl MuiInput-formControl'>
                    <textarea 
                      className='MuiInputBase-input MuiInput-input MuiInputBase-inputMultiline MuiInput-inputMultiline' 
                      name='inputUnlockPurchase' 
                      id="inputUnlockPurchase" 
                      placeholder='Digital key, code to redeem or link to a file...'
                    />
                  </div>
                </div>
            </div>
          }

          <div className="mt-2">
            <div className="row white col-md-10 left label-create" >
                <b>Name</b>
            </div>
          </div>

          <div className="label-description col-md-12 ml-0 pl-0 mb-2" >
            <div className="MuiInputBase-root MuiInput-root MuiInput-underline MuiInputBase-formControl MuiInput-formControl">
              <input
                className="MuiInputBase-input MuiInput-input"
                type="text"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.name}
                name="name"
                id="name"
                required
                placeholder='e. g. "Redeemable T-Shirt with logo"'
              />
            </div>
            {errors.name && touched.name && <div className="form-valid-notify">{errors.name}</div>}
          </div>

          <div className="mt-3">
            <div className="row white col-md-10 left label-create" >
                <b>Description (Optional)</b>
            </div>
          </div>
          <div className="label-description col-md-12 ml-0 pl-0" >
            <div className="MuiInputBase-root MuiInput-root MuiInput-underline MuiInputBase-formControl MuiInput-formControl">
                <textarea 
                  className="MuiInputBase-input MuiInput-input MuiInputBase-inputMultiline MuiInput-inputMultiline"
                  name="description" 
                  id="description" 
                  placeholder='e. g. "After purchasing you’ll be able to get the real T-Shirt"'
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.description}
                  required
                />
            </div>
            {errors.description && touched.description && <div className="form-valid-notify">{errors.description}</div>}
          </div>
          <div className="label-description mb-2 mt-1" >
              <p>With preserved line-breaks</p>
          </div>

          <div>
              <div className="col-md-6 p-0 left">
                  <div className="">
                    <div className="row white col-md-10 left label-create" >
                        <b>Royalties</b>
                    </div>
                  </div>

                  <div className="left label-description col-md-12 ml-0 pl-0" >

                    <div className="MuiInputBase-root MuiInput-root MuiInput-underline MuiInputBase-formControl MuiInput-formControl">
                        <input
                          className="MuiInputBase-input MuiInput-input"
                          onChange={onHandleRoyalties}
                          value={royalties}
                          id="royalties" 
                          name="royalties"
                          type="text"
                          placeholder='E. g. "10%"'
                          required
                        />
                    </div>
                  </div>
                  <div className="left label-description mb-2 mt-1" >
                      <p>Suggested: 10%, 20%, 30%</p>
                  </div>
              </div>
              <div className="col-md-6 p-0 " style={{float:'right'}}>
                <div className="">
                  <div className="row white col-md-10 left label-create" >
                      <b>Number of copies</b>
                  </div>
                </div>

                <div className="left label-description col-md-12 ml-0 pl-0" >
                    <div className="MuiInputBase-root MuiInput-root MuiInput-underline MuiInputBase-formControl MuiInput-formControl">
                        <input
                          className="MuiInputBase-input MuiInput-input"
                          onChange={onHandleCount}
                          value={count}
                          id="count" 
                          name="count"
                          type="text"
                          placeholder='E. g. "10%"'
                          required
                        />
                    </div>
                </div>
                <div className="left label-description mb-2 mt-1" >
                    <p>Amount of tokens</p>
                </div>
              </div>
          </div>  
          <div className="mt-5">
            <div className="row white col-md-10 left label-create" >
                <b>Properties (Optional)</b>
            </div>
          </div>
          <div className="">
            <div className="left label-description col-md-6 ml-0 pl-0" >
              <div className="MuiInputBase-root MuiInput-root MuiInput-underline MuiInputBase-formControl MuiInput-formControl">
                <input 
                  className="MuiInputBase-input MuiInput-input"
                  id="properties-size" 
                  name="properties-size"
                  placeholder='e.g. Size'
                />
              </div>
            </div>
            <div className="left label-description col-md-6 ml-0 pl-0 mb-2" >
              <div className="MuiInputBase-root MuiInput-root MuiInput-underline MuiInputBase-formControl MuiInput-formControl">
                <input 
                  className='MuiInputBase-input MuiInput-input'
                  id="properties-mount" 
                  name="properties-mount"
                  placeholder='e.g. M'
                />
              </div>
            </div>
          </div>
          <div className="row nft-group text-center col-md-12 mt-2 mb-2"> 
            <ConnectButton account = {account} 
              param={values} 
              loadImage = {loadImage}
              fileUrl={fileUrl} 
              uploadFile={uploadFile} 
              fileExt={fileExt}
              price={price}
              royalties={royalties}
              count={count}
              validate={ errors }/>
            </div>

        </form>
    </div>
  );
}

export default Form