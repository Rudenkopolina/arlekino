import styled from 'styled-components'

const StyledViewPanel = styled.div`
	position: absolute;
	right: 44px;
	top: 53px;
	display: flex;
	justify-content: space-around;
	align-items: center;
	
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
