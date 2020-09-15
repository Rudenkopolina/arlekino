import styled from 'styled-components'
import { DEVICE } from '../../../../../constants/media'



const StyledLangRadioBtn = styled.div`
  font-family: var( --fontGilroySemiBold);
	font-size: 14px;
	line-height: 24px;
	letter-spacing: 0.16px;
	color: var(--white);
	text-transform: uppercase;
	cursor:pointer;
	transition: all 0.3s ease-in;
	
	@media ${DEVICE.tabletDevices1250} {
      color: var(--mainblue);
      text-align: center;
  }
	
		&:hover {
			 color: var(--orange);
		}
`
export default StyledLangRadioBtn
