
import styled from 'styled-components';
import { Input } from 'antd';
const { TextArea } = Input;

const StyledTextArea = styled(TextArea)`
	&& {
		width: 150px;
		height: 23px !important;
		font-size: 12px !important;
		position: relative;
		top: -3px;
		resize: none;
		font-family: var(--fontGilroyRegular);
		overflow: hidden;
		min-height: 23px;
		box-sizing: border-box;
		border-radius: 2px;
		padding: 4px 5px;
		margin-right: 9px;
		line-height: 14px;
		color: #a6a6a6;
		letter-spacing: 0.16px;
		margin-top: 0;
		line-height: ${({ iseditable }) => (iseditable ? '1px solid #ECECEC;' : '1px solid transparent;')}; 
		border: ${({ iseditable }) => (iseditable ? '1px solid #ECECEC;' : '1px solid transparent;')}; 
		background: ${({ iseditable }) => (iseditable ? '#fff;' : 'none;')}; 
		width: ${({ iseditable }) => (iseditable ? '145px;' : '148px;')}; 
		

		textarea.ant-input {
		  height: 23px !important;
		  font-size: 12px !important;
		}
			@media (max-width: 359px) {
            width: 150px;
            min-width: 150px;
       }
		
		.ant-input-affix-wrapper>input.ant-input {
				line-height: 14px;
		}
		.ant-input-suffix {
				display: none !important;
		}
		&:read-only {
		  line-height: 14px;
		  
		}
		&[readonly] {
		  line-height: 14px;
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
			
			
	}
`;

export default StyledTextArea;
