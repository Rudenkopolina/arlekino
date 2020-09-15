import styled from 'styled-components'
import { DEVICE } from '../../../../../constants/media'


const StyledMobileTopMenu = styled.div`
	
	display: none;

	@media ${DEVICE.tabletDevices1250} {
	  width: 135px;
	  display: flex;
	  justify-content: space-between;
	  height: 46px;
	  
	  .ant-badge-dot {
	      width: 10px;
	      height: 10px;
	      top: 15px;
        background: #FF9800;
        box-shadow: 0px 4px 4px rgba(92, 112, 207, 0.3);
	  }
  }
`

export default StyledMobileTopMenu
