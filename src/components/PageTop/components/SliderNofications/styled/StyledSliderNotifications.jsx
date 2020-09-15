import styled from 'styled-components'
import PrevArrow from '../../../../../assets/img/prev-arrow.svg'
import NextArrow from '../../../../../assets/img/next-arrow.svg'

const StyledSliderNotifications = styled.div`
  width: 353px;
  height: 143px;
  margin-top: 8px;
  background: #FAFAFA;
  border: 1px solid var(--panelBorderGray);
  box-sizing: border-box;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.11);
  border-radius: 4px;
  
  .ant-carousel .slick-next {
    background: url(${(NextArrow)}) center center no-repeat;  
    opacity: 0.5;
    right: 14px !important;
    bottom: 12px!important;
    top: auto;
    z-index: 22;
    path {
      fill: var(--gray);
    } 
  } 
  .ant-carousel .slick-prev {
    z-index: 22;
    right: 48px !important;
    left: auto;
    bottom: 12px !important;
    top: auto;
    background: url(${(PrevArrow)}) center center no-repeat;  
    opacity: 0.5;
     path {
      fill: var(--gray);
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
