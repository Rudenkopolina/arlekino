import styled from 'styled-components'
import { DEVICE } from '../../../constants/media'


const PageTop = styled.section`
  	position: relative;
  	display: flex;
  	justify-content: space-between;
  	min-height: 215px;
  	
  @media ${DEVICE.tabletDevices1250} {
      display: block;
      min-height: 210px;
  }
`

const Title = styled.h2`
  width: calc(100% - 353px);
  font-family: var(--fontGilroyBold);
  font-style: normal;
  font-weight: bold;
  font-size: 44px;
  line-height: 1.6;
  text-align: center;
  color: #202020;
  padding-top: 90px;
  
   @media ${DEVICE.wideScreen} {
      width: calc(100% - 420px);
   }
  
  @media ${DEVICE.tabletDevices1250} {
      font-size: 25px;
      width: 100%;
      padding-top: 29px;
      padding-bottom: 17px;  
  }
  
  span {
    color: var(--orange);
  }
`

const SubTitle = styled.p`

  display: none;
  
  @media ${DEVICE.tabletDevices1250} {
      display: block;
        width: 100%;
        font-family: var(--fontGilroyMedium);
        font-size: 15px;
        line-height: 1.6;
        text-align: center;
        color: #202020;
        opacity: 0.8;
        padding-bottom: 20px;    
  }
 
`

const Aside = styled.section`
  	display: flex;
  	flex-wrap: wrap;
    width: 353px;
    @media ${DEVICE.wideScreen} {
        width: 420px;
    }
    padding-top: 20px;
    
     @media ${DEVICE.tabletDevices1250} {
        display: none;
    }
`

export default {
  Title,
  Aside,
  SubTitle,
  PageTop
};