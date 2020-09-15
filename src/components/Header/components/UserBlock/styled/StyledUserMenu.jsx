import styled from 'styled-components'
import { DEVICE } from '../../../../../constants/media'

const StyledUser = styled.div`
	display: flex;
	align-items: center;
	position: relative;
	
	@media ${DEVICE.tabletDevices1250} {
    justify-content: space-between;
    display: block;
    width: 100%;
  }	
`

export default StyledUser
