import styled from 'styled-components'
import { DEVICE } from '../../../../../constants/media'


const StyledUserDropdownWrapper = styled.div`
	position: relative;
	
	@media ${DEVICE.tabletDevices1250} {
    width: 200px;
  }
`

export default StyledUserDropdownWrapper;
