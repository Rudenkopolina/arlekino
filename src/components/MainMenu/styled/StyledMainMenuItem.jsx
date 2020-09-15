import styled from 'styled-components'
import { DEVICE } from '../../../constants/media'

const StyledMainMenuItem = styled.div`
	margin-left: 0;
	font-family: var(--fontGilroyRegular);
	font-size: 15px;
	line-height: 20px;
	letter-spacing: 0.16px;
	height: 28px;
	display: flex;
	align-items: center;
	border-radius: 4px;
	padding-right: 10px;
	padding-left: 10px;
	@media ${DEVICE.wideScreen} {
	    margin-left: 0;
	}
	
	 @media ${DEVICE.tabletDevices1250} {
	    padding: 4px 0;
      display: inline-flex;
      flex-direction: column;
      justify-content: center;
      text-align: center;
      margin-bottom: 12px;
      margin-left: 0;
      
   }
	
	&:first-child {
	  a {
	    
	    color: var(--orange);
	  }
	}
	&:last-child {
	  a {
	    border: 1px solid var(--orange);
	  }
	  
	}
	
	a {
	  display: inline-block;
	  color: var(--mainblack);
	  text-underline: none;
	  padding: 1px 15px 4px 15px;
	  height: 28px;
	  font-size: 15px;
	  border-radius: 4px;
	  
		span {
	      color: var(--orange);
	  } 
		&:hover {
			color: var(--orange);
			text-underline: none !important;
		}
	}
`

export default StyledMainMenuItem
