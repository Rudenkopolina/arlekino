import React from 'react';
import styled from 'styled-components';
import { Input } from 'antd';

const StyledInput = styled(
	({ ...props }) => <Input {...props} />
)`
	&& {
		background: var(--white);
		font-family: var(--fontGilroyRegular);
		font-size: 15px;
		line-height: 20px;
		border: none;
		box-sizing: border-box;
		border-radius: 0;
		padding: 2px 11px 2px 0;
		width: 280px;
		color: var(--mainblack);
		background: transparent;
		cursor:pointer;
		
		&:read-only {
			//opacity: 0.9; 
			cursor: auto;
		}
		&[readonly] {
    	//opacity: 0.9; 
    	cursor: auto; 
		}
		
		&:focus {
			border: none;
			color: var(--mainblack);
		}
		&:hover {
		   border: none;
       }
        
		.ant-input-focused {
			border: none;
		}
		&::placeholder {
			color: var(--mainblack);
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