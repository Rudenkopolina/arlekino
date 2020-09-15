import React, { useState } from 'react'
import { FormattedMessage } from 'react-intl'
import Styled from './styled/StyledDropdownSelect'
import ChangeServerModal from '../../../Modal/ChangeServerModal/ChangeServerModal'

const DropDownSelect = ({userType}) => {
  const [ isVisibleServerModal, setVisibleServerModal ] = useState(false);
  const toggleVisibleServerModal = () => {
    setVisibleServerModal(!isVisibleServerModal)
  };

  return (
    <Styled.Block userType={userType}>
      { userType === 'newdealer' ? (
        <>
          <Styled.ItemBuy><FormattedMessage id='Table.DropDown.Item1' /></Styled.ItemBuy>
          <Styled.Item isActive={false}>
            <p><FormattedMessage id='Table.DropDown.Item3' /></p>
          </Styled.Item>
        </>
      ) : (
        <>
          <Styled.Item isActive>
            <p onClick={toggleVisibleServerModal}><FormattedMessage id='Table.DropDown.Item4' /></p>
          </Styled.Item>
          <Styled.ItemBuy><FormattedMessage id='Table.DropDown.Item1' /></Styled.ItemBuy>

          <Styled.Item isActive>
            <p><FormattedMessage id='Table.DropDown.Item5' /></p>
          </Styled.Item>

        </>
      )}

      <ChangeServerModal isVisible={isVisibleServerModal} toggleVisibility={toggleVisibleServerModal} />
    </Styled.Block>

  )};

export default DropDownSelect;