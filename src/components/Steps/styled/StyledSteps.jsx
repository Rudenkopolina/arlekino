import styled, { css } from 'styled-components'
import PrevArrow from '../../../assets/img/mobileprevarrow.svg'
import NextArrow from '../../../assets/img/mobilenextarrow.svg'
import { DEVICE } from '../../../constants/media';

const Steps = styled.div`
  display: flex;
  width: 100%;
  margin-bottom: 43px;
  opacity: ${({ isActiveBlock }) => ( isActiveBlock ? '1;' : '0.6;')};
  
  @media (min-width: 577px) and (max-width: 767px) {
	 
	}
	
	@media (min-width: 768px) and (max-width: 1023px) {
	    margin-left: auto;
	    margin-right: auto;
	}
	
	@media (min-width: 1024px) and (max-width: 1249px) {
	 
	}
  
`

const StepsMobile = styled.div`
  display: none;
  
  @media (max-width: 576px) {
	    display: block;
	    margin: 0 auto;
	}
	
	@media (max-width: 359px) {
    max-width: 300px;
  }
	  
  @media (min-width: 360px) and (max-width: 400px) {
    display: block;
    max-width: 320px;
  }
  
  @media (min-width: 401px) and (max-width: 429px) {
        max-width: 100%;
  }
  
  @media (min-width: 430px) and (max-width: 576px) {
        max-width: 100%;
  }
  
  @media (max-width: 576px) {
      .ant-carousel .slick-next,
      .ant-carousel .slick-prev {
        
        top: 20px !important;
        z-index: 22 !important;
      }
      .ant-carousel .slick-next {
        background: url(${(NextArrow)}) center center no-repeat; 
        background-size: contain; 
        right: 0px !important;
          @media (max-width: 359px) {
              right: 0 !important;
         }
         @media (min-width: 401px) and (max-width: 429px) {
              
          }
  
          @media (min-width: 430px) and (max-width: 576px) {
               
          }
      } 
      .ant-carousel .slick-prev {
        left: 0px !important;
        background: url(${(PrevArrow)}) center center no-repeat; 
        background-size: contain; 
          @media (max-width: 359px) {
              right: 0 !important;
         }
         
      } 
      .ant-carousel .slick-prev.slick-disabled {
          opacity: 0 !important;
      }
      .slick-arrow.slick-next.slick-disabled {
        opacity: 0.25 !important;
      }
    }
    .ant-carousel .slick-prev, .ant-carousel .slick-next {
      width: 10px;
      height: 18px;
    }

`

const CarouselItem = styled.div`
  display: inline-flex;
  height: 65px;
  @media (max-width: 360px) {
    text-align: center;
  }
`

const Desktop = styled.div`
  display: flex;
   width: calc(100% - 19px);

  @media (max-width: 576px) {
    display: none;
  }
  
  @media (min-width: 577px) and  (max-width: 640px){
    justify-content: space-around;
  }
  @media (min-width: 641px) and  (max-width: 1024px){
    justify-content: space-around;
  }
  @media ${DEVICE.wideScreen} {
    width: 100%;
    justify-content: space-around;
  }
  @media ${DEVICE.tabletDevices1250} {
   
      width: 100%;
  }
  

`

const Item = styled.div`
  display: inline-flex;
  flex-wrap: wrap;
  height: 64px;
  margin-left: 57px;
  align-items: center;
  justify-content: center;
   @media ${DEVICE.tabletDevices1250} {
      //margin-left: 0;
      
   }
   
  
 @media (max-width: 576px) {
    margin-left: 0; 
  }
   @media (max-width: 1023px) {
    margin-left: 0; 
  }
  @media ${DEVICE.wideScreen} {
    margin-left: 0; 
  }
  @media  (max-width:360px) {
      width: 70px !important;
  }
  @media (min-width: 577px) and (max-width: 767px) {
	   width: 70px !important;
	}
	@media (min-width: 768px) and (max-width: 1023px) {
	   width: 80px !important;
	}
  //@media (min-width: 360px) and (max-width: 420px) {
  //  width: 90px !important;
  //}
  //@media (min-width: 421px) and (max-width: 480px) {
  //  width: 120px !important;
  //}
  //@media (min-width: 481px) and  (max-width: 576px) {
  //  width: 150px !important;
  //}
  cursor: pointer;
  
     ${({ isActive }) => {
        if (isActive) {
          return css`
              && {
               i {
                      color: var(--white);
                      background: var(--mainblue);
                  }
                  p {
                      color: var(--mainblue);
                  }     
              }  
                `}}}
  
  &:hover {
    i {
        color: var(--white);
        background: var(--mainblue);
        @media (min-width: 320px) and  (max-width: 1249px) 
          {
            color: var(--gray); 
            background: var(--white);
          }
    }
    p {
        color: var(--mainblue);
        
        @media (min-width: 320px) and  (max-width: 1249px) 
          {
            color: var(--gray); 
          } 
    }
  }
 

  &:first-child {
    @media  (min-width:1250px) {
      margin-left: 40px;  
    }
   
  }
  
  i {
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 33px;
    height: 33px;
    background: var(--white);
    border: 1px solid var(--panelBorderGray);
    box-sizing: border-box;
    box-shadow: 3px 4px 4px rgba(0, 0, 0, 0.05);
    font-family: var(--fontGilroyBold);
    font-size: 18px;
    line-height: 28px;
    border-radius: 50%;
    color: var(--gray); 
    padding-top: 1px;
    transition: all 0.3s ease-in;
    &:hover {
        color: var(--white);
        background: var(--mainblue);
        @media (min-width: 320px) and  (max-width: 1249px) 
        {
          color: var(--gray); 
          background: var(--white);
        }
    }
  }
  p {
    width: 100%;
    padding-top: 4px;
    font-family: var(--fontGilroyRegular);
    font-size: 15px;
    line-height: 17px;
    text-align: center;
    color: var(--gray);
    transition: all 0.3s ease-in;
     &:hover {
        color: var(--mainblue);
 
    }
    
     @media (min-width: 320px) and  (max-width: 1249px) 
        {
          color: var(--gray); 
         
        }
    @media (max-width: 576px){
        font-size: 13px;
    }
  }
`
export default {
  Steps,
  StepsMobile,
  Desktop,
  CarouselItem,
  Item
}
