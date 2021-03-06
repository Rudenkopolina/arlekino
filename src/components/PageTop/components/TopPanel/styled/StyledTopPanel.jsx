import styled from 'styled-components'
import { DEVICE } from '../../../../../constants/media'

const StyledTopPanel = styled.nav`
    display: flex;
    width: 353px; 
    align-items: center;
    margin-bottom: 2px;

    @media ${DEVICE.wideScreen} {
        width: 420px;
    }
    .ant-badge-dot {
      width: 10px;
      height: 10px;
      left: 10px;
      top: 3px;
      background: var(--mainblue);
      box-shadow: 0px 4px 4px rgba(92, 112, 207, 0.3);
    }
`
export default StyledTopPanel
