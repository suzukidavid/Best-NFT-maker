import React from 'react'
import { useWalletModal } from '@pizzafinance/ui-sdk'
import { useWallet } from '@binance-chain/bsc-use-wallet'

const ConnectButton = (props) => {
  const { connect, reset } = useWallet()
  const { onPresentConnectModal, onPresentAccountModal } = useWalletModal(connect, reset)
  const {account} = props;
  const accountEllipsis = account ? `${account.substring(0, 4)  }...${  account.substring(account.length - 4)}` : null;
  if(account === null){
    return (
        <button type='button' className = "header__login connectWallet" onClick={onPresentConnectModal}>
            <svg xmlns="http://www.w3.org/2000/svg" width={512} height={512} viewBox="0 0 512 512"><path d="M192,176V136a40,40,0,0,1,40-40H392a40,40,0,0,1,40,40V376a40,40,0,0,1-40,40H240c-22.09,0-48-17.91-48-40V336" style={{fill: 'none', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: '32px'}} /><polyline points="288 336 368 256 288 176" style={{fill: 'none', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: '32px'}} /><line x1={80} y1={256} x2={352} y2={256} style={{fill: 'none', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: '32px'}} /></svg>
            <span><img width="25" src="img/create/fox.webp" alt="" /></span>
        </button>
    )
  }
  return (
    <button type='button' className = "header__login connectWallet" onClick={onPresentAccountModal} title={account}>
        
        <svg xmlns="http://www.w3.org/2000/svg" width={512} height={512} viewBox="0 0 512 512"><path d="M192,176V136a40,40,0,0,1,40-40H392a40,40,0,0,1,40,40V376a40,40,0,0,1-40,40H240c-22.09,0-48-17.91-48-40V336" style={{fill: 'none', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: '32px'}} /><polyline points="288 336 368 256 288 176" style={{fill: 'none', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: '32px'}} /><line x1={80} y1={256} x2={352} y2={256} style={{fill: 'none', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: '32px'}} /></svg>
        <span>{accountEllipsis}</span>
    </button>
  )
}

export default ConnectButton
