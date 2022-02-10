import addresses from 'config/constants/contracts'

const chainId = process.env.REACT_APP_CHAIN_ID

export const getPizzaAddress = () => {
  return addresses.pizza[chainId]
}
export const getPastaAddress = () => {
  return addresses.pasta[chainId]
}
export const getMasterChefAddress = () => {
  return addresses.masterChef[chainId]
}

export const getSingleContractAddress = () => {
  return addresses.erc721[3]
}

export const getMultipleContractAddress = () => {
  return addresses.erc1155[3]
}

export const getMulticallAddress = () => {
  return addresses.mulltiCall[chainId]
}
export const getWbnbAddress = () => {
  return addresses.wbnb[chainId]
}
export const getLotteryAddress = () => {
  return addresses.lottery[chainId]
}
export const getLotteryTicketAddress = () => {
  return addresses.lotteryNFT[chainId]
}
