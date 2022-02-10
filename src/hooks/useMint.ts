import { useCallback } from 'react'
import { useWallet } from '@binance-chain/bsc-use-wallet'
import { useDispatch } from 'react-redux'
import { fetchFarmUserDataAsync, updateUserStakedBalance, updateUserBalance } from 'state/actions'
import { stake, pastaStake, pastaStakeBnb, callSingleMint, callMultiMint } from 'utils/callHelpers'

import { AbiItem } from 'web3-utils'
import erc721 from 'config/abi/ERC721.json'
import erc1155 from 'config/abi/ERC1155.json'
import addresses from 'config/constants/contracts'
import { useMasterchef, usePastaChef, useSingleContract, useMultipleContract } from './useContract'
import useWeb3 from './useWeb3'

export const useSingleMint = () => {
  // const dispatch = useDispatch()
  const { account } = useWallet()
  const web3 = useWeb3()
  // const masterChefContract = useMasterchef()
  const singleContract = useSingleContract()
  
  const handleSingleMint = useCallback(  
    async (fee: any, tokenURI:string) => {
      const txHash = await callSingleMint(singleContract, [[account,fee]], tokenURI, account)
      // dispatch(fetchFarmUserDataAsync(account))
      return txHash.status
    },
    [account, singleContract],
  )

  return { onSingleMint: handleSingleMint }
}


export const useMultipleMint = () => {
  const { account } = useWallet()
  const web3 = useWeb3()
  const multipleContract = useMultipleContract()

  const handleMultipleMint = useCallback(

    async (fee:any, count:number, tokenURI:string) => {
      const txHash = await callMultiMint(multipleContract, [[account,fee]], count, tokenURI, account)
      // dispatch(fetchFarmUserDataAsync(account))
      return txHash.status
    },
    [account, multipleContract],
  )
  return { onMultipleMint: handleMultipleMint }
}

export const useSingleAddToken = () => {
  const singleContract = useSingleContract()
  const web3 = useWeb3()
  const handleAddToken = useCallback(
    async () => {
      singleContract.methods.symbol().call().then((tokenSymbol: any) => {
          const tokenDecimals = 0
          web3.givenProvider.request({
            method: 'wallet_watchAsset',
            params: {
              type: 'ERC20',
              options: {
                address: '0x9ae94817b42E8b465921BEE0f1596c34f7B2B2Ee',
                symbol: tokenSymbol,
                decimals: tokenDecimals,
                image: '',
              },
            },
          });
      })
    }, [singleContract,web3]
  )
  return  { onAddToken : handleAddToken }
}


export const useMultiAddToken = () => {
  const multiContract = useMultipleContract()
  const web3 = useWeb3()
  const handleAddToken = useCallback(
    async () => {
      multiContract.methods.symbol().call().then((tokenSymbol: any) => {
          const tokenDecimals = 0
          web3.givenProvider.request({
            method: 'wallet_watchAsset',
            params: {
              type: 'ERC20',
              options: {
                address: '0xde354322175239104304A3D3630AbF7803168Fa2',
                symbol: tokenSymbol,
                decimals: tokenDecimals,
                image: '',
              },
            },
          });
      })
    }, [multiContract,web3]
  )
  return  { onAddToken : handleAddToken }
}