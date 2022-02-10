import React, { useContext, useEffect, useState, useCallback,  } from 'react'
import { ToastProvider, useToasts,   } from 'react-toast-notifications';
import Button from '@material-ui/core/Button';
import { useSingleMint, useMultipleMint } from 'hooks/useMint';

import { nftFileupload, getTokenID } from '../../network/api'
import { ContentContext } from '../../../contexts/ContentContext'
import ConnectModal from './ConnectModal'



const ConnectButton = (props) => {


  const { walletId } = useContext(ContentContext)
  const { onSingleMint } = useSingleMint()
  const { onMultipleMint } = useMultipleMint()

  const [modal, SetModal] = React.useState()

  const {account, singleToken, param, fileUrl, uploadFile, loadImage, fileExt, validate, price, royalties, count} = props;


  
  

  const fileUpload = () => {
    
    const data = new FormData();
    const len = loadImage.split("/").length;
    
    if(uploadFile === null || fileUrl.length === 0){
      alert("Please select nft file");
      return;
    }

    data.append('walletId', walletId);
    data.append('collection', singleToken ? "single" : "multi");
    data.append('nftName', param.name);
    data.append('subScription', param.description);
    data.append('nftFileName', fileUrl.split("/")[len - 1]);
    data.append('imgFileName', loadImage.split("/")[len - 1]);
    data.append('nftFile', uploadFile);
    data.append('imgFile', uploadFile);
    data.append('price', price);
    data.append('fav', "");

    getTokenID().then(async (result) => {
      const tokenID = result.result[0].MAXID
      if(singleToken){
        successMessage()
        const tokenURI = `${tokenID}.${fileExt}`
        onSingleMint(royalties, tokenURI).then((res) => {
          if(res){
            nftFileupload(data).then(result)
            window.alert("Transaction has been minted successfully!")
          }else{
            window.alert("Ops! Transaction has been not stopped.")
          }
        })
        
      }else if(!singleToken){
        successMessage()
        const tokenURI = `${tokenID}.${fileExt}`
        onMultipleMint(royalties, count, tokenURI).then((res) => {
          if(res){
            nftFileupload(data).then(result)
            window.alert("Transaction has been minted successfully!")
          }else{
            window.alert("Ops! Transaction has been not stopped.")
          }
        })
      }else{
        errorMessage()
      }
    })
  }
  
  const { addToast } = useToasts()


  const successMessage = () => {
    return (
      addToast( "SingleToken transaction has been sent successfully!", {
        appearance: 'success',
        autoDismiss: true,
      })
    )
  }


  const errorMessage = () => {
    return (
      addToast( "Ops! Transaction has been not sent. Name is already existed. Please select different name.", {
        appearance: 'error',
        autoDismiss: true,
      })
    )
  }

 
    return (
      
        <Button variant="contained" type="submit" id="btn-connect" title={account} color="primary" size="large" onClick = {async () => { if(validate.validate) {fileUpload()}}}>
            Create Item
        </Button>
    )
}

export default ConnectButton
