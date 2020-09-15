import React from 'react'
import { FormattedMessage } from 'react-intl'
import Modal from '../../Modal/Modal';
import StyledAddIconModal from './styled/StyledAddIconModal'
import AddNewDeviceForm from '../../Forms/AddNewDeviceForm/AddNewDeviceForm'
import { injectIntl } from 'react-intl';

const AddDeviceModal = ({isVisible,toggleVisibility, intl }) => {
  return (
    <Modal
      isPopupVisible={isVisible}
      onCancel={toggleVisibility}
      centered
    >
      <p><FormattedMessage id='Modal.Add.Txt' /></p>
      <StyledAddIconModal />

      <AddNewDeviceForm intl={intl}/>

    </Modal>
  )};

export default injectIntl(AddDeviceModal);