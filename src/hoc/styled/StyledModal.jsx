import styled from 'styled-components';
import React from 'react';
import { Modal } from 'antd';
import { DEVICE } from '../../constants/media';

const StyledModal = styled(
	({ ...props }) => <Modal {...props} />
)`
	&& {
		    //width: 688px !important;
		    // top: 60px;
		     
		    @media ${DEVICE.mobileDevicesS} {
				 
			}
			@media ${DEVICE.mobileDevices} {
			    
			}
			
    margin-bottom: 80px;
		border-radius: 10px;
		background-color: var(--white);
		min-height: 200px;
		padding-bottom: 0;
		
		.ant-modal-content {
			box-shadow: 0 0 10px 0 rgba(139, 155, 163, 0.5);
      border: solid 1px var(gray);
			border-radius: 10px;
			min-width: 100%;
			min-height: 200px;
			padding:  40px 20px 30px 20px;
			background-color: var(--white);
			
			@media ${DEVICE.tablet} {
                
            }
            
      @media ${DEVICE.mobileDevices} {
				
			}
			
		}
		
		.ant-modal-close-x {
		    width: 10px;
		    height: 10px;
		    position: absolute;
		    z-index: 120;
		    top: 13px;
		    right: 13px;
		    line-height: 1;
		    img {
			    width: 100%;
			    width: 100%;
		    }
		}
		
		.ant-modal-body {
			padding: 0;
		}
	
	}
`
export default StyledModal;