import styled from 'styled-components'
import { DEVICE } from '../../../constants/media';

const StyledThTop = styled.div`
    display: flex;
    align-items: center;
    min-height: 22px;
    width: 100%;
    margin-bottom: 16px;
    position: relative;
  
    &:after {
      content: '';
      position: absolute;
      top: 0;
      right: 0;
      background: #E0DEE8;
      width: 1px;
      height: 22px; 
    }
    
    @media ${DEVICE.tabletDevices1250} {
     
   }
    @media ${DEVICE.wideScreen} {
        
    }
    
    @media ${DEVICE.tabletDevices1250} {
        
    }
    
    
    @media ${DEVICE.wideScreen} {
       
    }
    
`
export default StyledThTop
