import contracts from './contracts'
import { FarmConfig, QuoteToken } from './types'

const farms: FarmConfig[] = [
  {
    pid: 0,
    lpSymbol: 'TDCASH',
    lpAddresses: {
      97: '',
      56: '0xBA48d6682CCeA9cCf39B77159c281acf9518DfCf',
    },
    tokenSymbol: 'TDHOARD',
    tokenAddresses: {
      97: '',
      56: '0xdB82AE8698C87Bd259ef623478d7F14531702671',
    },
    quoteTokenSymbol: QuoteToken.BNB,
    quoteTokenAdresses: contracts.wbnb,
  },
  {
    pid: 1,
    lpSymbol: 'TDCASH-BNB LP',
    lpAddresses: {
      97: '',
      56: '0x677f65800fe6b5390b1c741fab6641a3a7793dfc',
    },
    tokenSymbol: 'TDCASH',
    tokenAddresses: {
      97: '',
      56: '0xBA48d6682CCeA9cCf39B77159c281acf9518DfCf',
    },
    quoteTokenSymbol: QuoteToken.BNB,
    quoteTokenAdresses: contracts.wbnb,
  },
  {
    pid: 2,
    lpSymbol: 'TDCASH-BUSD LP',
    lpAddresses: {
      97: '',
      56: '0x1a762588bf1d67d297f9347018c8f91a4107b79f',
    },
    tokenSymbol: 'TDCASH',
    tokenAddresses: {
      97: '',
      56: '0xBA48d6682CCeA9cCf39B77159c281acf9518DfCf',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
    isCommunity: false,
  },  
  {
    pid: 3,
    lpSymbol: 'BNB-BUSD LP',
    lpAddresses: {
      97: '',
      56: '0x1b96b92314c44b159149f7e0303511fb2fc4774f',
    },
    tokenSymbol: 'BNB',
    tokenAddresses: {
      97: '',
      56: '0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
    isCommunity: false,
  },  
  {
    pid: 4,
    lpSymbol: 'BNB-CAKE LP',
    lpAddresses: {
      97: '',
      56: '0xa527a61703d82139f8a06bc30097cc9caa2df5a6',
    },
    tokenSymbol: 'BNB',
    tokenAddresses: {
      97: '',
      56: '0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c',
    },
    quoteTokenSymbol: QuoteToken.CAKE,
    quoteTokenAdresses: contracts.cake,
    isCommunity: false,
  },  
  {
    pid: 5,
    lpSymbol: 'BNB-ETH LP',
    lpAddresses: {
      97: '',
      56: '0x70d8929d04b60af4fb9b58713ebcf18765ade422',
    },
    tokenSymbol: 'BNB',
    tokenAddresses: {
      97: '',
      56: '0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c',
    },
    quoteTokenSymbol: QuoteToken.ETH,
    quoteTokenAdresses: contracts.eth,
    isCommunity: false,
  },
   
  
]

export default farms
