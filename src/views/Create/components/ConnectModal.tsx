import React from 'react';

import { useWalletModal } from '@pizzafinance/ui-sdk'
import { useWallet } from '@binance-chain/bsc-use-wallet'

import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';

import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import { useSpring, animated } from 'react-spring/web.cjs'; // web.cjs is required for IE 11 support
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';








const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    modal: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    paper: {
      backgroundColor: theme.palette.background.paper,
      border: '4px solid #f8911e',
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),
      textAlign: 'center',
    },
  }),
);

interface FadeProps {
  children?: React.ReactElement;
  in: boolean;
  onEnter?: () => Record<string, unknown>;
  onExited?: () => Record<string, unknown>;
}

const Fade = React.forwardRef<HTMLDivElement, FadeProps>(function Fade(props, ref) {
  const { in: open, children, onEnter, onExited, ...other } = props;
  const style = useSpring({
    from: { opacity: 0 },
    to: { opacity: open ? 1 : 0 },
    onStart: () => {
      if (open && onEnter) {
        onEnter();
      }
    },
    onRest: () => {
      if (!open && onExited) {
        onExited();
      }
    },
  });

  return (
    <animated.div ref={ref} style={style} {...other}>
      {children}
    </animated.div>
  );
});

export default function SpringModal(props) {

  
  const { connect, reset } = useWallet()
  const { onPresentConnectModal, onPresentAccountModal } = useWalletModal(connect, reset)




  const classes = useStyles()
  let setShow = props
  const [open, setOpen] = React.useState(true)

  const handleOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
    setShow = false
  }

  return (
      
    <div>
      
      <Modal
        aria-labelledby="spring-modal-title"
        aria-describedby="spring-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <div className={classes.paper}>
            <h2 id="spring-modal-title" style={{marginTop: '1rem'}}>Connect to your wallet</h2>
            <button id="closeModal" type="button" onClick={handleClose}>X</button>
            <img src="img/create/fox.webp" alt="" style={{width:'8rem'}}/>
            <div className="mb-2 mt-4">
                <Button variant="contained" color="primary" onClick={onPresentConnectModal} style={{backgroundColor : '#ff8800d1'}}>
                    Sign In
                </Button>
            </div>
            <div>
                <Link to="/" className="normal-font upppercase">&gt; <b>Use a diffrent wallet</b></Link>
            </div>
            
          </div>
        </Fade>
      </Modal>
    </div>
  );
}
