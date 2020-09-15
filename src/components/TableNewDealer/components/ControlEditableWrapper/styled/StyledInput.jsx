import styled from 'styled-components';
import { DEVICE } from '../../../../../constants/media'
import { Input } from 'antd';

const StyledInput = styled(Input)`
	&& {
		width: 150px;
		height: 26px;
		font-family: var(--fontGilroyRegular);
		font-size: 13px;
		box-sizing: border-box;
		border-radius: 2px;
		padding: 1px 10px 1px 2px;
		margin-right: 9px;
		letter-spacing: 0.16px;
		color: #a6a6a6;
		border: ${({ iseditable }) => (iseditable ? '1px solid #EFEEF3;' : 'none;')}; 
    background: ${({ iseditable }) => (iseditable ? 'var(--white);' : 'none;')}; 
		@media ${DEVICE.tabletDevices1250} {
			min-width: 175px;
			width: calc(100% - 125px);
			height: 36px;
			font-size: 16px;
		}
			@media (max-width: 359px) {
            width: 150px;
            min-width: 148px;
       }
		
		.ant-input-affix-wrapper>input.ant-input {
				line-height: 16px;
		}
		.ant-input-suffix {
				display: none !important;
		}
		&:read-only {
			font-family: var(--fontGilroySemiBold);
			color: var(--mainblack);
		}
		&[readonly] {
    	 font-family:  var(--fontGilroySemiBold);
    	 color: var(--mainblack);
		}
		
		&:focus {
			//border: solid 1px var(--borderInput);
		}
		&:hover {
		   //border: 1px solid var(--borderInput);
     }
        
		.ant-input-focused {
			//border: solid 1px var(--borderInput);
		}
        
        &[disabled]{
           opacity: 0.5;  
        }
        
			&[autofocus]::-moz-placeholder:focus {
			  color: #a6a6a6  !important;
			}
			
			
			&[autofocus]:-moz-placeholder:focus {
			  color: #a6a6a6 !important;
			}
		
			&[autofocus]::-webkit-input-placeholder {
			  color: #a6a6a6 !important;
			}
			.ant-form-item-label {
				font-style: normal;
				font-weight: normal;
				font-size: 13px;
				line-height: 15px;
				color: var(--gray);
				width: 60px;
				@media ${DEVICE.tabletDevices1250} {
					width: 70px;
					font-size: 16px;
				}
				
				font-family: var(--fontGilroyRegular);
			}
			.ant-form-item-label > label {
				font-style: normal;
				font-weight: normal;
				font-size: 13px;
				line-height: 15px;
				color: var(--gray);
				width: 60px;
				font-family: var(--fontGilroyRegular);
				
				@media ${DEVICE.tabletDevices1250} {
					width: 70px;
					font-size: 16px;
				}
			}
	}
`;

export default StyledInput;
