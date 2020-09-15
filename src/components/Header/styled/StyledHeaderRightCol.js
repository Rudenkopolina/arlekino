import styled from 'styled-components'
import { DEVICE } from '../../../constants/media'

const StyledHeaderRightCol = styled.div`
  	display: flex; 	
  	
  	@media ${DEVICE.tabletDevices1250} {
      display: none;
    }
`

export default StyledHeaderRightCol
