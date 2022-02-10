import { PoolConfig, QuoteToken, PoolCategory } from './types'

const pools: PoolConfig[] = [
  {
    pastaId: 0,
    tokenName: 'GDN',
    earnToken: 'GDN',
    stakingTokenName: QuoteToken.GDN,
    stakingTokenAddress: '0xBA48d6682CCeA9cCf39B77159c281acf9518DfCf',
    contractAddress: {
      97: '',
      56: '0xf66fa2Cd8d8a804b2b29B237FeC9387E9A4151B2',
    },
    poolCategory: PoolCategory.CORE,
    projectLink: 'http://dragonswap.app/',
    harvest: true,
    tokenPerBlock: '0.005',
    sortOrder: 1,
    isFinished: false,
    tokenDecimals: 18,
  },  
]

export default pools
