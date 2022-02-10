import styled from 'styled-components'
import Container from './Container'

const Page = styled(Container)`
  min-height: 100vh;
  padding-top: 10px;
  padding-bottom: 16px;
  background-color:black;

  ${({ theme }) => theme.mediaQueries.sm} {
    padding-top: 24px;
    padding-bottom: 24px;
  }

  ${({ theme }) => theme.mediaQueries.lg} {
    padding-top: 10px;
    padding-bottom: 32px;
  }
`

export default Page
