import styled from 'styled-components'
import { DEVICE } from '../../../../../constants/media'

const StyledUserName = styled.div`
	font-family: var(--fontGilroyRegular);
	font-size: 14px;
	color: var(--white);
	padding-left: 11px;
	padding-right: 25px;
	
	@media ${DEVICE.tabletDevices1250} {
    color: var(--mainblack);
  }
`

export default StyledUserName
