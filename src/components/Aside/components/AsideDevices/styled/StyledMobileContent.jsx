import styled from 'styled-components'
import { DEVICE } from '../../../../../constants/media'

const StyledMobileContent = styled.div`
	display: flex;
	width: 100%;
	align-items: center;
	flex-direction: column;

        @media ${DEVICE.tabletDevices1250} {
            display: block;
          	width: 100%;
            border: 1px solid #6C7DFF;
            border-radius: 4px;
        }
`
export default StyledMobileContent
