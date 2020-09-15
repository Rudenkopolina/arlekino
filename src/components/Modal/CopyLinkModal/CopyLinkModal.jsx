import React from 'react'
import { FormattedMessage } from 'react-intl'
import Modal from '../../Modal/Modal';
import StyledCopyLinkModal from './styled/StyledCopyLinkModal'

const CopyLinkModal = ({isVisible,toggleVisibility}) => {
  return (
    <Modal
      isPopupVisible={isVisible}
      onCancel={toggleVisibility}
      centered
    >
      <p><FormattedMessage id='Modal.Copy.Title' /></p>
      <StyledCopyLinkModal/>
      <p><FormattedMessage id='Modal.Copy.Txt' /></p>
    </Modal>
  )};

export default CopyLinkModal;