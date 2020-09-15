import styled from 'styled-components'
import { DEVICE } from '../../../constants/media'

const StyledMenuItem = styled.div`
	padding-left: 50px;
	font-family: var(--fontGilroyMedium);
	font-size: 15px;
	line-height: 20px;
	letter-spacing: 0.16px;
	color: var(--white);
	
	@media ${DEVICE.tabletDevices1250} {
    padding-left: 0;
    width: 100%;
    margin-bottom: 12px;
    color: var(--mainblue);
  }

	&:hover {
			color: var(--orange);
			text-underline: none !important;
			a {
	        color: var(--orange);
	    }
		}
		
	a {
		color: var(--white);
		@media ${DEVICE.tabletDevices1250} {
      color: var(--mainblue);
      width: 100%;
      display: inline-block;
      text-align: center;
    }
		
		&:hover {
			 color: var(--orange);
		}
	}
`

export default StyledMenuItem
