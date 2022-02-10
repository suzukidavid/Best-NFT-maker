import React from 'react';

import { useWalletModal } from '@pizzafinance/ui-sdk'
import { useWallet } from '@binance-chain/bsc-use-wallet'

import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';

import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import { useSpring, animated } from 'react-spring/web.cjs'; // web.cjs is required for IE 11 support
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';



export default function SpringModal(props) {
  const { connect, reset } = useWallet()
  const { onPresentConnectModal, onPresentAccountModal } = useWalletModal(connect, reset)

  return (
    <div>
        <section className="section section--bg section--first">
          <div className="container text-center">
              <div className="connect-wallet">
                <h2 id="spring-modal-title" style={{marginTop: '1rem'}}>Connect to your wallet</h2>
                <img src="img/create/fox.webp" alt="" style={{width:'8rem'}}/>
                <div className="mb-2 mt-4">
                    <Button variant="contained" color="primary" onClick={onPresentConnectModal} style={{backgroundColor : '#ff8800d1'}}>
                        Connect
                    </Button>
                </div>
              </div>
            </div>
        </section>
    </div>
  );
}
