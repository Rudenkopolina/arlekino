import styled from 'styled-components'
import IconAddMobile from '../../../../../assets/img/mobileadd.svg'
import { DEVICE } from '../../../../../constants/media'

const StyledAsideDevices = styled.div`
	display: flex;
	width: 100%;
	align-items: center;
	flex-direction: column;
	justify-content: space-between;
  position: relative;
  
   @media ${DEVICE.tabletDevices1250} {
      padding-bottom: 22px;
   }

	&>header {
	  display: flex;
	  cursor: pointer;
	  width: 100%;
	  justify-content: space-between;
	  align-items: center;
	  padding: 15px 22px 9px 17px;
	  border-bottom: none;
	  
	  @media ${DEVICE.tabletDevices1250} {
      border-top: none; 
      position: relative;
    }
    
     @media (max-width: 767px) {
          padding: 20px 10px 20px 15px; 
     }

     @media (min-width: 768px) and (max-width: 1249px) {
          padding: 20px 10px 20px 2px;
          border-bottom: 1px solid var(--panelBorderGray);  
     }
   
	
      &> i {
          display: none;
          
          @media ${DEVICE.tabletDevices1250} {
              position: absolute;
              display: block;
              width: 22px;
              height: 20px;
              cursor: pointer;
              top: 17px;
              margin-left: 8px;
              background: url(${(IconAddMobile)}) center center no-repeat;
              z-index: 22;
          }
        
          @media (max-width: 767px)  {
              right: 12px;
            }
           @media (min-width: 768px) and (max-width: 1249px) {
               right: 13px;
            }
	    }
	  
        h3 {
          font-family: var(--fontGilroySemiBold);
          font-size: 14px;
          line-height: 20px;
          display: inline-block;
          padding: 0;
          margin: 0;
          @media ${DEVICE.tabletDevices1250} {
            display: none;
           }
        }
	}
	
`
export default StyledAsideDevices
