import styled from 'styled-components';
import React from 'react';
import { Modal } from 'antd';
import { DEVICE } from '../../../constants/media';

const StyledModal = styled(
	({ ...props }) => <Modal {...props} />
)`
	&& {
		border-radius: 0;
		padding-bottom: 0;
		
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
		}
		
		.ant-modal-body {
			padding: 0;
		}
		
		h3 {
		  font-family: var(--fontAvenirHeavy);
		  font-size: 24px;
		  font-weight: 900;
		  line-height: 1.23;
		  letter-spacing: normal;
		  color: var(--modalTitle);
		  margin-bottom: 27px;
		  
		  @media ${DEVICE.laptopL} {
            
          }
		}
		.ant-btn {
		
			
		}
	}
`
export default StyledModal;