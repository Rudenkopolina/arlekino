import styled from 'styled-components'
import IconIntro from '../../../assets/img/man.svg'
import IconClose from '../../../assets/img/close-medium.svg'
import { DEVICE } from '../../../constants/media';

const Block = styled.div`
    height: 409px;
    @media ${DEVICE.tabletDevices1250} {
      height: auto;
   }
    @media ${DEVICE.wideScreen} {
        padding-bottom: 40px;
        height: auto;
    }
    background: var(--white);
    width: calc(100% - 19px);
    @media ${DEVICE.tabletDevices1250} {
        width: 100%;
        padding-bottom: 30px;
    }
    border: 1px dashed #adb7e7;
    box-sizing: border-box;
    border-radius: 16px;
   
    
    @media  (min-width: 1250px) {
       max-width: 848px;
    }
    
    @media ${DEVICE.wideScreen} {
        max-width: 100%;
    }
    padding-top: 30px;
    position:relative;
    margin-bottom: 45px;
    display: ${({ isVisibleBlock }) => (isVisibleBlock ? 'block;' : 'none;')};
`
const Img = styled.div`
  background: var(--mainblue);
  position: relative;
  height: 50px;
  &:after {
      content: '';
      position: absolute;
      left: 50%;
      margin-left: -31px;
      width: 62px;
      height: 70px;
      top: -40px;
      background: url(${IconIntro}) center center no-repeat;  
  }
`
const Close = styled.div`
  position: absolute;
  right: 24px;
  width: 12px;
  height: 12px;
  top: 20px;
  cursor: pointer;
  background: url(${IconClose}) center center no-repeat;
  
  @media ${DEVICE.tabletDevices1250} {
    top: 13px;    
    right: 13px;     
  }
`

const Title = styled.h3`
  font-family: var(--fontGilroyBold);
  font-size: 24px;
  line-height: 28px;
  text-align: center;
  margin-bottom: 50px;
  color: var(--mainblack);
  
   @media ${DEVICE.tabletDevices1250} {
      font-size: 20px;
   }
   
  span {
    color: var(--orange);
  }
`
const Subtitle = styled.h4`
  font-family: var(--fontGilroyBold);
  font-size: 24px;
  line-height: 28px;
  text-align: center;
  margin-bottom: 21px;
  margin-top: 12px;
  width: 100%;
  display: block;
  color: var(--mainblue);
  padding-bottom: 0;
  padding-top: 0;
  
  @media ${DEVICE.tabletDevices1250} {
      font-size: 20px;
  }
`
const Steps = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;  
  @media ${DEVICE.tabletDevices1250} {
     flex-wrap: wrap; 
     margin-right: -6px;
   }
`
const Item = styled.div`
  display: inline-flex;
  width: 148px;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  @media (min-width: 1200px) and (max-width: 1439px) {
        height: 155px;   
        padding: 17px 15px 17px 15px;
    }
    
    @media ${DEVICE.wideScreen} {
        width: 180px;
        height: 160px;
        margin-left: 35px;
        padding: 30px;
    }
    
  @media ${DEVICE.tabletDevices1250} {
     flex-wrap: wrap;
     margin-left: 6px;
     margin-right: 6px;
     margin-bottom: 13px;
     width: 148px;
     height: 148px;
   }
    
  min-height: 148px;
  cursor: pointer;
  background: var(--white);
  box-shadow: 0px 4px 24px rgba(160, 160, 160, 0.25);
  border-radius: 4px;
  padding: 17px 17px 17px 20px;
  margin-left: 15px;
  &:first-child {
    margin-left: 0;
    
    @media ${DEVICE.tabletDevices1250} {
      margin-left: 6px;
    }
  }
  &:nth-child(2n) {
    &>header {
      color: var(--mainblue);
    }
  }
  &>header {
    width: 100%;
    display: flex;
    justify-content: space-between;
    margin-bottom: 16px;
    color: var(--orange);
    font-family: var(--fontGilroyBold);
    font-size: 24px;
    line-height: 28px;
  }
  &:hover {
   
  }
  i {
    cursor: pointer;
    display: inline-block;
  }
  p {
    width: 100%;
    font-family: var(--fontGilroyRegular);
    font-size: 12px;
    line-height: 20px;
    text-align: center;
    color: var(--mainblack);
  }
`
export default {
  Block,
  Steps,
  Title,
  Img,
  Close,
  Subtitle,
  Item
}
