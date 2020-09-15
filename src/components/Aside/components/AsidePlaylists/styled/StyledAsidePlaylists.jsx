import styled from 'styled-components'
import { DEVICE } from '../../../../../constants/media'

const StyledAsidePlaylists = styled.div`
	display: flex;
	width: 100%;
	padding: 0 22px 0 17px;
	flex-direction: column;
	border-top: 1px solid var(--panelBorderGray);
	
	@media ${DEVICE.tabletDevices1250} {
    padding-top: 20px;
    padding-bottom: 20px;
    padding-left: 0;
    padding-right: 0;
    border-top: 1px solid var(--panelBorderGray);
    border-bottom: 1px solid var(--panelBorderGray);
    transition: all 0.45s ease-out;
  }		
`
export default StyledAsidePlaylists
