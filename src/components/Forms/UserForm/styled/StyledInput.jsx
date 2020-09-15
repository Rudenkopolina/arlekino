import React from 'react';
import styled from 'styled-components';
import { Input } from 'antd';

const StyledInput = styled(
	({ ...props }) => <Input {...props} />
)`
	&& {
		width: 167px;
		height: 32px;
		background: var(--white);
		font-family: var(--fontGilroyRegular);
		font-size: 13px;
		border: 1px solid var(--borderInput);
		box-sizing: border-box;
		border-radius: 2px;
		padding: 8px 11px;
		margin-right: 9px;
		color: var(--mainblack);
		
		&:read-only {
			opacity: 0.5;  
		}
		&[readonly] {
    	opacity: 0.5;  
		}
		
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
			.ant-form-item-label {
				font-style: normal;
				font-weight: normal;
				font-size: 13px;
				line-height: 15px;
				color: var(--gray);
				width: 60px;
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
			}
	}
`
export default StyledInput;