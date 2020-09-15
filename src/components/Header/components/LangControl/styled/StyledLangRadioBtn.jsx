import styled from 'styled-components'
// import { Radio } from 'antd';

const StyledLangRadioBtn = styled.div`
  font-family: var( --fontGilroySemiBold);
	font-size: 14px;
	line-height: 24px;
	letter-spacing: 0.16px;
	color: var(--white);
	text-transform: uppercase;
	cursor:pointer;
	transition: all 0.3s ease-in;
	
		&:hover {
			 color: var(--orange);
		}
`
export default StyledLangRadioBtn
