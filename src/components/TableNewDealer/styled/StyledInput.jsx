import React from 'react';
import styled, { css } from 'styled-components';
import { Input } from 'antd';

const StyledInput = styled(
	({ ...props }) => <Input {...props} />
)`
	&& {
		width: ${({ width }) => (width)};
		${({ uiType }) => {
			if ( uiType && uiType=== 'search') {
				return css`
							position: relative;
							left: -45px;
							margin-left: 0;
      	`}
		}}
		height: 26px;
		margin-left: 10px;
		background: var(--white);
		font-family: var(--fontGilroyRegular);
		font-size: 12px;
		border: 1px solid var(--borderInput);
		box-sizing: border-box;
		border-radius: 2px 0 0 2px;
		padding: 6px 11px;
		color: var(--gray);
		
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