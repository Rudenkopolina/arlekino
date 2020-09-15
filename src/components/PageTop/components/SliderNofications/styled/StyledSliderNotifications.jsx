import styled from 'styled-components'
import PrevArrow from '../../../../../assets/img/prev-arrow.svg'
import NextArrow from '../../../../../assets/img/next-arrow.svg'
import PrevArrowDisabled from '../../../../../assets/img/prev-arrow-disabled.svg'
import NextArrowDisabled from '../../../../../assets/img/next-arrow-disabled.svg'
import { DEVICE } from '../../../../../constants/media'


const StyledSliderNotifications = styled.div`
 
  height: 155px;
  margin-top: 8px;
  background: #FAFAFA;
  border: 1px solid var(--panelBorderGray);
  box-sizing: border-box;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.11);
  border-radius: 4px;
  @media (min-width: 1250px) {
        width: 353px;      
  }
   @media ${DEVICE.wideScreen} {
        width: 420px;
   }
  
  position: absolute;
  right: 0;
  top: 48px;
  z-index: 22;

  
  @media ${DEVICE.tabletDevices1250} {
      position: absolute;
      //width: 340px;
      height: 182px;
      top: 0;
      left: -1px;   
  }
          
  width: calc(100%);
  
    
    // @media (max-width: 576px) {
   	//    width: 500px;
    //}
    // @media (max-width: 359px) {
   	//    width: 300px;
    //}
    // @media (max-width: 400px) {
   	//    width: 360px;
    //}
    //
    //@media (max-width: 420px) {
   	//    width: calc(100% - 100px)
    //}
    //
    //@media (max-width: 500px) {
   	//    width: 440px;
    //}
  
  .ant-carousel .slick-next {
    background: url(${(NextArrow)}) center center no-repeat;  
    right: 14px !important;
    bottom: 12px!important;
    top: auto;
    z-index: 22;
    @media ${DEVICE.tabletDevices1250} {
       bottom: 18px!important;
    }
    path {
      fill: var(--gray);
    } 
    &.slick-disabled {
     background: url(${( NextArrowDisabled)}) center center no-repeat;  
    }
  } 
  .ant-carousel .slick-prev {
    z-index: 22;
    right: 48px !important;
    left: auto;
    bottom: 12px !important;
    @media ${DEVICE.tabletDevices1250} {
       bottom: 18px!important;
    }
    top: auto;
    background: url(${(PrevArrow)}) center center no-repeat;  
     path {
      fill: var(--gray);
    } 
    &.slick-disabled {
      background: url(${( PrevArrowDisabled)}) center center no-repeat;  
    }
  } 
   .ant-carousel .slick-next:hover,
   .ant-carousel .slick-prev:hover {
    path {
      fill: var(--orange);
    }
    
  } 
`

export default StyledSliderNotifications
