import styled from 'styled-components'
import { DEVICE } from '../../../constants/media'

const StyledFooterContent = styled.div`
  	display: flex;
  	justify-content: space-between;
    align-items: center;   
    
    @media ${DEVICE.tabletDevices1250} {
        justify-content: flex-start;
    }
`
export default StyledFooterContent
