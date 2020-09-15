import React, { useState } from 'react'
import { FormattedMessage } from 'react-intl'
import StyledAsideOttId from './styled/StyledAsideOttId'
import CopyLinkModal from '../../../../../Modal/CopyLinkModal/CopyLinkModal'
const AsideOttId = ({nameDevice}) => {

  const [ isVisibleCopyModal, setVisibleCopyModal ] = useState(false);
  const toggleVisibleCopyModal = () => {
    setVisibleCopyModal(!isVisibleCopyModal)
  };

  return (
    <StyledAsideOttId isOpacity={(nameDevice === 'НЕ ВЫБРАНО') ? true : false }>
      <header>
        <p>OTT ID <i></i></p>
      </header>

      <div>
        {
          nameDevice === 'НЕ ВЫБРАНО' ? (
            <p><FormattedMessage id='AsideOttId.Txt' /></p>
          )
            : (
              <p>{'testData3234'}</p>
            )
        }

        <i onClick={toggleVisibleCopyModal}></i>
      </div>
      <CopyLinkModal isVisible={isVisibleCopyModal} toggleVisibility={toggleVisibleCopyModal}/>
    </StyledAsideOttId>
  )
}
export default AsideOttId
