import styled from 'styled-components'
import { DEVICE } from '../../../../../constants/media'

const StyledWallet = styled.div`
  display: flex;
  align-items: center;
  padding-left: 16px;
  padding-right: 20px;
  
   @media ${DEVICE.tabletDevices1250} {
        position: absolute;
        right: 40px;
        top: 1px;
        width: 70px;
        height: 30px;
        padding-left: 0;
        padding-right: 0;
   }

  
  i {
    display: inline-block;
    position: relative;
    top: 2px;
    width: 20px;
    height: 16px;
    cursor:pointer;
    margin-right: 12px;
    img {
      width: 20px;
      height: 17px;
       object-fit: cover;
       display: inherit;
    }
  }
  
	p {
      font-family: var(--fontGilroySemiBold);
      font-size: 15.5px;
      text-transform: uppercase;
      line-height: 17px;
      letter-spacing: 0.16px;
      position: relative;
      top: 2px;
      color: var(--mainblack);
      @media ${DEVICE.tabletDevices1250} {
          font-size: 18px;
          line-height: 20px;
          margin-right: 17px;
      }
	 }
`

export default StyledWallet
