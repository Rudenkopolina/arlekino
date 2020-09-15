import React from 'react';
import styled, { css } from 'styled-components';
import { Button } from 'antd';
import { DEVICE } from '../../../constants/media';

const StyledButton = styled(({ ...props }) => (
	<Button {...props} />
))`
   && {
      display: block; 
      width: 160px;
		  height: 40px;
		  background-image: none;
		  padding: 11px 17px;
		  font-family: var(--fontGilroySemiBold);
			font-size: 14px;
			line-height: 24px;
		  color: var(--white);
		  background: var(--orange);
		  transition: all 0.3s ease-in;
		  text-transform: uppercase;
		  border: none;
		  outline: none;
		  border-radius: 0;
	
		  &:hover {
		    background: var(--orangeHover);
		    border: none;
		  }
		  
		  &.ant-btn-sm {
		     
		  }
		  &[disabled] {
		  	opacity: 0.5;
		  }
		  
    ${({ uiType }) => {
		if ( uiType && uiType ==='secondary') {
			return css`
						
						 @media ${DEVICE.tabletDevices} {
							
						}
                     
                         
                     &:hover {
		                   
		                 }
                         &:disabled {
                            
                         }
                    `}
	}}	 
    }
    
`
export default StyledButton;
