import styled from 'styled-components';
import { DEVICE } from '../../../constants/media';
import Server from '../../../assets/img/serverChange.svg'

const StyledModalHeader = styled.header`
		width: 100%;
		height: 79px;
		left: 577px;
		top: 504px;
		background:var(--green);
		padding: 37px 10px 0 70px;
		&:after {
		  content: '';
		  position:absolute;
      width: 50px;
      height: 50px;
      top: 16px;
      left: 29px;
      background: url(${(Server)}) center center no-repeat;
		}
		
		@media ${DEVICE.tablet} {
                
    }	
    p {
    		
			font-family: var(--fontGilroyRegular);
			font-size: 14px;
			line-height: 20px;
			letter-spacing: 0.16px;
			color: #FFFFFF;
    }
`
export default StyledModalHeader;