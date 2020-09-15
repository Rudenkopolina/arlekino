import React from 'react';
import styled from 'styled-components';
import { Input } from 'antd';

const StyledInput = styled(
	({ ...props }) => <Input {...props} />
)`
	&& {
		background: var(--white);
		font-family: var(--fontGilroyRegular);
		font-size: 13px;
		border: 1px solid transparent;
		border-radius: 0;
		line-height: 1.4;
	
		padding: 0 11px 2px 0;
		width: 180px;
		color: var(--gray);
		background: transparent;
		cursor:pointer;
		height: 25px;
		
		&:read-only {
			opacity: 0.9; 
			cursor: auto;
			color: var(--mainblack);
		}
		&[readonly] {
    	opacity: 0.9; 
    	cursor: auto;
    	color: var(--mainblack);
		}
		&::placeholder {
			color: var(--mainblack);
		}
		
		&:focus {
			color: var(--mainblack);
			border: 1px solid transparent;
		}
		&:hover {
		   border: 1px solid transparent;
       }
        
		.ant-input-focused {
			border: 1px solid transparent;
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