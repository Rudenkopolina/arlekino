import styled from 'styled-components'
import { DEVICE } from '../../../../../../constants/media'


const StyledDropdownList = styled.div`
    position: relative;
    padding: 13px 0; 
	  width: 346px;
    height: 122px;
    overflow-x: scroll;
    background: var(--white);
    border: 1px solid var(--panelBorderGray);
    box-sizing: border-box;
    border-radius: 4px;
    //flex-direction: column;
    //
    
     @media (max-width: 359px) {
   	    width: 100%; 
      }
      
   @media (min-width: 360px) and (max-width: 574px) {
        width: 100%; 
    }
    @media (min-width: 575px) and (max-width: 767px) {
        width: 100%; 
    }
    
    @media ${DEVICE.tabletDevices1250} {
  
    }
    &:before {
      content: '';
      position: absolute;
      top: -7px;
      left: 0;
      right: 0;
      width: 100%;
      height: 3px;
      background: var(--white);
    }
`
export default StyledDropdownList
