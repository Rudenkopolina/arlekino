import styled from 'styled-components'
import { DEVICE } from '../../../../../constants/media'

const StyledAsidePlaylistHeader = styled.header`
	display: flex;
	width: 100%;
	align-items: center;
	justify-content: space-between;
	padding-top: 17px;
	@media ${DEVICE.tabletDevices1250} {
	  padding-top: 0;
	  
	}
	 @media (min-width: 768px) and (max-width: 1249px) {
        padding-right: 6px;  
        padding-bottom: 6px;
    }

	h3 {
	  font-family: var(--fontGilroySemiBold);
    text-transform: uppercase;
    font-size: 14px;
    line-height: 20px;
    display: inline-block;
    padding: 0;
    margin: 0;
    @media ${DEVICE.tabletDevices1250} {
      color: var(--orange);
      font-size: 12px;
      line-height: 20px;
     
    }
    @media  (max-width: 767px) {
        padding-left: 15px;
    }
    @media (min-width: 768px) and (max-width: 1249px) {
        padding-left: 0;
       
    }
	}
	
`
export default StyledAsidePlaylistHeader
