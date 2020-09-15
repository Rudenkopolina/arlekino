import React from 'react'
import { FormattedMessage } from 'react-intl'
import Modal from '../../Modal/Modal';
import StyledAddIconModal from './styled/StyledAddIconModal'
import AddNewPlaylistForm from '../../Forms/AddNewPlaylistForm/AddNewPlaylistForm'
import { injectIntl } from 'react-intl';

const AddPlaylistModal = ({isVisible,toggleVisibility, intl }) => {
  return (
    <Modal
      isPopupVisible={isVisible}
      onCancel={toggleVisibility}
      centered
    >
      <p><FormattedMessage id='Modal.AddPlaylist.Txt' /></p>
      <StyledAddIconModal />

      <AddNewPlaylistForm intl={intl}/>

    </Modal>
  )};

export default injectIntl(AddPlaylistModal);