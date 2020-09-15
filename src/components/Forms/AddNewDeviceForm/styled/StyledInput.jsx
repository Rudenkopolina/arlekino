import styled from 'styled-components';
import { Input } from 'antd';

const StyledInput = styled(Input)`
	&& {
		width: 178px;
		height: 32px;
		background: var(--white);
		font-family: var(--fontGilroyRegular);
		font-size: 13px;
		border: 1px solid var(--borderInput);
		box-sizing: border-box;
		border-radius: 2px 0 0 2px;
		padding: 6px 11px;
		color: var(--mainblack);
		overflow: hidden;
		
		&:focus {
			border: solid 1px var(--borderInput);
		}
		&:hover {
		   border: 1px solid var(--borderInput);
       }
        
		.ant-input-focused {
			border: solid 1px var(--borderInput);
		}
        
        &[disabled]{
           opacity: 0.5;  
        }
        
			&[autofocus]::-moz-placeholder:focus {
			  color: var(--mainblack)  !important;
			}
			
			
			&[autofocus]:-moz-placeholder:focus {
			  color: var(--mainblack) !important;
			}
			
			
			&[autofocus]::-webkit-input-placeholder {
			  color: var(--mainblack) !important;
			}
	}
`
export default StyledInput;