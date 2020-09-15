import React from 'react'
import StyledModal from './styled/StyledModal'
import IconCloseSvg from '../../assets/img/closewhite.svg'


const Modal = ({ children,uiType, isPopupVisible , footer = null, ...props }) => {
  const widthModal= (uiType ==='bg') ? 466 : 340
  return (
    <StyledModal
      visible={isPopupVisible}
      footer={footer}
      width= {widthModal}
      closeIcon={<img src={IconCloseSvg} alt="" />}
      {...props}
      uiType={uiType}
    >
      {children}
    </StyledModal>
  )};


export default Modal;