import styled from 'styled-components'
import { DEVICE } from '../../../../../constants/media'
import LogoMobile from '../../../../../assets/img/Arlekino.tvmobile.svg'

const StyledLogo = styled.div`
	display: flex;
	width: 230px;
	height: 78px;
	background: #FFFFFF;
	border-radius: 0px 0px 9px 9px;
	justify-content: center;
	align-items: center;
	cursor: pointer;
	background: #FFFFFF;
	
	img {
	    display: block;
	    @media ${DEVICE.tabletDevices1250} {
	        display: none;
	    }
	}
	
	@media ${DEVICE.tabletDevices1250} {
	
	  width: 88px;
    height: 37px;
    position: relative;
    top: 7px;
    left: 20px;
    background: url(${(LogoMobile)}) center center no-repeat;
    background-size: contain;
  }
`

export default StyledLogo
