import styled from 'styled-components'
import { DEVICE } from '../../../../../constants/media'



const StyledLogout = styled.div`
	display: inline-block;
	margin-left: 16px;

	 @media ${DEVICE.tabletDevices1250} {
        display: ${({ isDesktop }) => (isDesktop ? 'none;' : 'block;')};
   }
	
	img {
	
		display: block;
	}
`

export default StyledLogout
