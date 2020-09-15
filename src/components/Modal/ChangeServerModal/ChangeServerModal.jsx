import React from 'react'
import { FormattedMessage } from 'react-intl'
import { Select  } from 'antd'
import Button from '../../Button/Button'
import Modal from '../../Modal/Modal';
import StyledTitleServer from './styled/StyledTitleServer'
import StyledModalHeader from '../styled/StyledModalHeader'
import StyledModalContent from '../styled/StyledModalContent'
import SelectServer from './styled/StyledSelectServer'
import StyledSelectedOptions from './styled/StyledSelectedOptions'
const { Option } = Select

const ChangeServerModal = ({isVisible,toggleVisibility}) => {
  return (
    <Modal
      isPopupVisible={isVisible}
      onCancel={toggleVisibility}
      centered
      uiType='bg'
    >
      <StyledModalHeader>
        <p><FormattedMessage id='Modal.Server.Title' /> {'Детская'}?</p>
      </StyledModalHeader>

      <StyledModalContent>
        <StyledSelectedOptions>Детская, телевизор на кухне</StyledSelectedOptions>
        <StyledTitleServer>
          <FormattedMessage id='Modal.Server.Txt' />
        </StyledTitleServer>

        <SelectServer dropdownClassName='selectServerDropDown' defaultValue="Server RU01 (Russia)">
            <Option value="Server">Server RU01 (Russia)1</Option>
            <Option value="Server2">Server RU01 (Russia)2</Option>
            <Option value="Server3">Server RU01 (Russia)3</Option>
            <Option value="Server4">Server RU01 (Russia)4</Option>
        </SelectServer>

        <Button size={'small'}><FormattedMessage id='Modal.Server.Btn' /></Button>
      </StyledModalContent>
    </Modal>
  )};

export default ChangeServerModal;