import styled from 'styled-components'
import IconClose from './../../../../../assets/img/close-notification-slider.svg'
import { DEVICE } from '../../../../../constants/media'

const Item = styled.div`
  padding: 13px 17px 13px 23px;
  height: 143px;
  @media ${DEVICE.tabletDevices1250} {
    height: 182px;
  }
  position:relative;
`

const Title = styled.div`
  display: inline-flex;
  font-family: var(--fontGilroyMedium);
  font-size: 12px;
  line-height: 14px;
  text-transform: uppercase;
  color: #000000;
  width: 100%;
  position: relative;
  margin-bottom: 11px;
  padding-left:  ${({ type }) => ((type === 'warning')? '72px;' :'0')}; 
`

const Txt = styled.div`
  font-family: var(--fontGilroyRegular);
  font-size: 12px;
  line-height: 17px; 
   @media ${DEVICE.tabletDevices1250} {
    font-size: 13px;
  }
  &>div {
   
  }
  p {
      font-family: var(--fontGilroyRegular);
      font-size: 12px;
      line-height: 17px; 
       @media ${DEVICE.tabletDevices1250} {
        font-size: 13px;
      }
  }
`

const More = styled.div`
  font-family: var(--fontGilroySemiBold);
  font-size: 12px;
  line-height: 14px; 
  cursor:pointer;
  color: var(--orange);
  display: block;
  margin-top: 15px;
  cursor: pointer;
  z-index: 1;
  
   @media (min-width: 1250px) {
        position: absolute;
        left: 24px;
        bottom: 13px;
    }
    @media (min-width: 768px) and (max-width: 1249px) {
      
    }
      
`

const BottomPanel = styled.div`
  display: flex;
  position: absolute;
  left: 0;
  bottom: 12px;
  width: 100%;
  align-items: center;
  margin-top: 22px;
  padding: 0 17px 0 23px;
  justify-content: flex-end;
  
  @media ${DEVICE.tabletDevices1250} {
    bottom: 18px;
  }
`

const Date = styled.div`
  font-family: var(--fontGilroyMedium);
  font-size: 12px;
  line-height: 17px;
  padding-right: 60px;
`
;


const Close = styled.div`
  cursor: pointer;
  position: absolute;
  right: 12px;
  top: 12px;
  width: 10px;
  height: 10px;
  display: inline-block;
  z-index: 22;
  background: url(${(IconClose)}) center center no-repeat;
`
;

const Warning = styled.div`
  position: absolute;
  left: 0;
  top: -3px;
  font-family: var(--fontGilroyMedium);
  font-size: 12px;
  line-height: 14px;
  background: var(--red);
  color: var(--white);
  cursor:pointer;
  text-transform: uppercase;
  padding: 3px 5px;
`
;

export default {
  Date,
  BottomPanel,
  Title,
  Txt,
  More,
  Warning,
  Close,
  Item
}
