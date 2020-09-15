import styled from 'styled-components'
import { DEVICE } from '../../../../../constants/media'

const StyledAsideServerItem = styled.li`
	display: flex;
	align-items: center;
	margin-bottom: 12px;
	width: 100%;
	@media ${DEVICE.tabletDevices1250} {
    display: block;
    text-align: left;
  }

	
	p {
	    font-family: var(--fontGilroyRegular);
	    font-size: 13px;
      line-height: 17px;
      letter-spacing: 0.16px;
      @media ${DEVICE.tabletDevices1250} {
        display: inline-block;
      }
	}
`
export default StyledAsideServerItem
