import styled from 'styled-components'
import { DEVICE } from '../../../constants/media'


const StyledFooter = styled.div`
  color: var(--grayFooter);
  font-family: var(--fontGilroyRegular);
	font-size: 15px;
	display: flex;
	align-items: center;
	padding-right: 100px;
	
	@media ${DEVICE.tabletDevices1250} {
     display: none;
  } 
	
	p {
		padding-right: 35px;
		font-size: 15px;
	}
	
	span {
    	font-family: var(--fontGilroyRegular);
		font-style: normal;
		font-weight: normal;
		font-size: 15px;
		line-height: 20px;
		letter-spacing: 0.16px;
		display: inline-block;
		padding: 0 39px 0 10px;
     }
	
`

export default StyledFooter
