import React from 'react'
import { ToastProvider } from 'react-toast-notifications';
import { useWallet } from '@binance-chain/bsc-use-wallet'
import Menu from '../../../components/Menu'
import Footer from '../../../components/Footer'
import Content from './Content';
import ConnectModal from '../components/ConnectWallet'

const Create1155: React.FC = () => {
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
        <ToastProvider placement="top-left">
          <Content />
        </ToastProvider>
        
        <Footer/>
      </div>
  )
}

export default Create1155
