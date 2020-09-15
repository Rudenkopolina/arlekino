import React from 'react'
import StyledModal from './styled/StyledModal'
import IconCloseSvg from '../../assets/img/closewhite.svg'
const widthVideo = 340

const Modal = ({ children, isPopupVisible , footer = null, ...props }) => {
  return (
    <StyledModal
      visible={isPopupVisible}
      footer={footer}
      width= {widthVideo}
      closeIcon={<img src={IconCloseSvg} alt="" />}
      {...props}
    >
      {children}
    </StyledModal>
  )};

export default Modal;