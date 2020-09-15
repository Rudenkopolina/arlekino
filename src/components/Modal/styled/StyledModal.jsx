import styled, { css } from 'styled-components';
import React from 'react';
import { Modal } from 'antd';
import { DEVICE } from '../../../constants/media';

const StyledModal = styled(
	({ ...props }) => <Modal {...props} />
)`
	&& {
		border-radius: 0;
		padding-bottom: 0;
		@media (max-width: 339px) {
   	    width: 320px !important;
   	    overflow: hidden;
    }
		
		.ant-modal-content {
			box-shadow: none;
			border-radius: 0;
			width: 339px;
			height: 150px;
			padding:  37px 20px 28px 63px;
			background-color: var(--green);
			
			 p {
			 		color: var(--white);
					font-size: 14px;
					line-height: 20px;
					margin-bottom: 17px;
					@media ${DEVICE.tabletDevices1250} {
             font-size: 16px; 
             padding-left: 4px;  
      		}
			 }
			
			@media ${DEVICE.tablet} {
                
      }	
		}
		
		.ant-modal-close-x {
		    width: 29px;
		    height: 30px;
		    position: absolute;
		    z-index: 120;
		    top: 0;
		    right: 7px;
		    
		    
		    @media (max-width: 339px) {
	       	top: -13px;
					right: 36px;
    		}
		        
		}
		
		.ant-modal-body {
			padding: 0;
		}
		
		.ant-form-item-has-error .ant-form-item-explain {
			color: var(--white);
			opacity: 0.8;
		}
		.ant-form-item-has-error .ant-form-item-explain>div {
			color: var(--white);
			opacity: 0.8;
		}
		
		 ${({ uiType }) => {
				if ( uiType && uiType === 'bg') {
					return css`
						.ant-modal-body {
						 background-color: var(--white);
						}
						.ant-modal-content {
					  box-shadow: none;
					  border-radius: 3px;
					 	width: 100%;
					  min-height: 300px;
					  height: auto;
					  padding:  0 0 44px 0;
					  background-color: var(--white);
					
					  @media (min-width: 480px) {
								 width: 466px;
					  }
					
					}          
			      `}
			}}
	}

`
export default StyledModal;