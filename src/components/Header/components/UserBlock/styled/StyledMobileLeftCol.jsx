import styled from 'styled-components'
import { DEVICE } from '../../../../../constants/media'


const StyledMobileLeftCol = styled.div`
  display: none;
	@media ${DEVICE.tabletDevices1250} {
    display: block; 
  }
`
export default StyledMobileLeftCol
