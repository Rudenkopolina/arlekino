import styled from 'styled-components'

const StyledLangControl = styled.div` 
	display: flex;
	// margin-left: 70px;  
	// margin-top: 30px;
	// padding-right: 20px;
	position: relative;
	// margin-right: 18px;
	&:after {
		content: '';
		width: 1px;
		height: 23px;
		position: absolute;
		top: 0;
		right: -1px;
		background: var(--headerBorder);
	}
	
	
`

export default StyledLangControl
