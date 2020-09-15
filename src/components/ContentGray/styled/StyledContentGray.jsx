import styled from 'styled-components'
import { DEVICE } from '../../../constants/media'

const StyledContentGray = styled.div`
	width: calc(100% - 19px);
	margin-right: 19px;
	height: 367px;
	background: #FAFAFA;
	padding: 35px 0 50px 0;
	position: relative;	
	margin-bottom: 45px;
	@media ${DEVICE.tabletDevices1250} {
			width: 100%;
			height: auto;
			min-height: auto;
			padding: 30px 0 50px 0;
	}
	&:after {
		content: '';
		position: absolute;
		width: 100%;
		height: 367px;
		top: 0;
		left: -100%;
		@media ${DEVICE.tabletDevices1250} {
			width: 150%;
			height: 100%;
			right: -30%;
			left: auto;
			z-index: -1;
			min-height: auto;
		}
		background: #FAFAFA;
	}
	
`

export default StyledContentGray;
