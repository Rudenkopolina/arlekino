import React from 'react'
import { FormattedMessage } from 'react-intl'
import Button from '../../Button/Button'
import Modal from '../../Modal/Modal';
import StyledDeleteIconModal from './styled/StyledDeleteIconModal'

const DeleteDeviceModal = ({isVisible,toggleVisibility}) => {
  return (
    <Modal
      isPopupVisible={isVisible}
      onCancel={toggleVisibility}
      centered
    >
      <p><FormattedMessage id='Modal.Remove.Txt' /></p>
      <StyledDeleteIconModal/>
      <Button><FormattedMessage id='Modal.Remove.Btn' /></Button>
    </Modal>
  )};

export default DeleteDeviceModal;