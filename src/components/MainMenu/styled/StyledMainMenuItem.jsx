import styled from 'styled-components'

const StyledMainMenuItem = styled.div`
	margin-left: 20px;
	font-family: var(--fontGilroyRegular);
	font-size: 15px;
	line-height: 20px;
	letter-spacing: 0.16px;
	padding: 4px 15px;
	height: 28px;
	display: flex;
	align-items: center;
	border-radius: 4px;
	
	&:first-child {
	  a {
	    color: var(--orange);
	  }
	}
	&:last-child {
	  border: 1px solid var(--orange);
	}
	
	a {
	  color: var(--mainblack);
	  text-underline: none;
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
