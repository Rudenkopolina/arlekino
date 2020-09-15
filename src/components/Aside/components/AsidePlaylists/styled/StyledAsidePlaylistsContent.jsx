import styled from 'styled-components'
import { DEVICE } from '../../../../../constants/media'

const StyledAsidePlaylistContent = styled.div`
	display: flex;
	width: 100%;
	height: 140px;
	padding: 12px 14px;
	border: 1px solid var(--panelBorderGray);
	background: var(--panelBgGray);
  border-radius: 4px;
  margin-top: 33px;	
  margin-bottom: 30px;
  
  @media (max-width: 767px) {
     margin-top: 12px;	
     margin-bottom: 4px;
  }
   @media (min-width: 768px) and (max-width: 1249px) {
       margin-top: 12px;	
   }
  
  @media ${DEVICE.tabletDevices1250} {
      
  }
  
`
export default StyledAsidePlaylistContent
