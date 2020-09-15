import styled , {css} from 'styled-components'
import { DEVICE } from '../../../../../constants/media'

const StyledUserBlock = styled.div`
	display: flex;
	max-width: 200px;
	align-items: center;
	height: 35px;
	margin-top: 23px;
	cursor: pointer;

	@media ${DEVICE.tabletDevices1250} {
    max-width: 100%;
    margin-top: 0;
    position: relative;
    justify-content: space-between;
    border-bottom: 1px solid var(--panelBorderGray);
    padding-bottom: 12px;
    height: 56px;
    width: 100%;
    padding-top: 10px;
    
     ${({ collapsedInner }) => {
        if (collapsedInner) {
          return css`
              //background: red;
              //position: fixed;
              //top: 62px;
              //left: 15;
              //z-index: 999;
              //width: calc(100% - 30px);   
        `}}}       
  }
	
	i {
		display: block;
		position: relative;
		top: -1px;
		@media ${DEVICE.tabletDevices1250} {
      svg path {
        fill: var(--mainblack);
      }
    }
	}
	.ant-dropdown-trigger.ant-dropdown-open {
	  i {
	      transform: translateY(3px) rotate(180deg);
	  }
	}
`

export default StyledUserBlock
