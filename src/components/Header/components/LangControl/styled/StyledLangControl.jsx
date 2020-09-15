import styled from 'styled-components'
import { DEVICE } from '../../../../../constants/media'

const StyledLangControl = styled.div` 
	display: flex;
	margin-left: 70px;  
	margin-top: 30px;
	padding-right: 20px;
	position: relative;
	margin-right: 18px;
	&:after {
		content: '';
		width: 1px;
		height: 23px;
		position: absolute;
		top: 0;
		right: -1px;
		background: var(--headerBorder);
    @media ${DEVICE.tabletDevices1250} {
        display: none;
    }
	}
	
    @media ${DEVICE.tabletDevices1250} {
        margin-top: 25px;
        margin-bottom: 40px;
        margin-left: 0;
        margin-right: 0;
        padding-right: 0;
    }
`

export default StyledLangControl
