import React from 'react'
import { useWalletModal } from '@pizzafinance/ui-sdk'
import { useWallet } from '@binance-chain/bsc-use-wallet'
import Button from '@material-ui/core/Button';
import Menu from '../../components/Menu'
import Footer from '../../components/Footer'
import Content from './components/Content';
import ConnectModal from './components/ConnectWallet'


const Create: React.FC = () => {
  const {account} = useWallet();
  if(account === null){
    return (
      <div>
        <Menu />
        <ConnectModal />
        <Footer/>
      </div>
      
    )
  }
  return (
    <div>
      <Menu />

      <Content />
      
      <Footer/>
    </div>
  )
}

export default Create
