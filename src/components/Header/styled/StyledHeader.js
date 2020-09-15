import styled from 'styled-components'
import { DEVICE } from '../../../constants/media'

const StyledHeader = styled.div`
  	display: flex;
  	background: linear-gradient(to bottom, #6779d1, #4d5da7);
    height: 103px;
    
	@media ${DEVICE.tabletDevices1250} {
	  //display: block;
	  //position: fixed;
	  width: 100%;
	  height: 62px;
	  z-index: 99;
	  width: 100%;
	}
	
`

export default StyledHeader
