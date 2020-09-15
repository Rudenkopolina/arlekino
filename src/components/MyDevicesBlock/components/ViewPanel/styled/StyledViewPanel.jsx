import styled from 'styled-components'
import { DEVICE } from '../../../../../constants/media'

const StyledViewPanel = styled.div`
	position: absolute;
	right: 44px;
	top: 40px;
	display: flex;
	justify-content: space-around;
	align-items: center;
	
	@media ${DEVICE.mobileDevices} {
    display: flex;
    width: 100%;
    position: static;
    justify-content: flex-end;
    align-items: center;
    margin-top: 45px;
    margin-right: 35px;
  }
  
  @media (min-width: 480px) and (max-width: 767px) {
    padding-right: 35px;
  }
  @media (min-width: 768px) and (max-width: 1249px) {
    padding-right: 15px;
    right: 0;
  }
	
	&>div {
	  width: 26px;
	  cursor: pointer;
	  display: inline-flex;
	  justify-content: center;
	  margin-left: 8px;
	  padding-bottom: 8px;
	  position: relative;
	  
	  &:first-child {
	    &:after {
	      content: '';
	      position: absolute;
        left: 0;
        bottom: -5px;
        width: 26px;
        height: 4px;
        background: var(--mainblue);
	    }
	  }	
	}

`

export default StyledViewPanel
