import React, { useState } from 'react'
import { FormattedMessage, injectIntl } from 'react-intl'
import StyledAsideDevices from './styled/StyledAsideDevices'
import AsideOttId from './components/AsideOttId/AsideOttId'
import AsideLinkList from './components/AsideLinkList/AsideLinkList'
import AsideSelectDevice from '../../../AsideSelectDevice/AsideSelectDevice'

const AsideDevices = () =>{
  const [nameDevice, setName] = useState("НЕ ВЫБРАНО");
  const [isVisible, setVisibility ] = useState(false);

  const toggleVisibility = () => {
    setVisibility(!isVisible);
  };

  const onSelect = (val, option) => {
    setName(option.value);
    toggleVisibility();
  };

  return (
    <StyledAsideDevices>

      <header>
        <h3><FormattedMessage id='AsideDevices.Title' /></h3>
        <AsideSelectDevice nameDevice={nameDevice}
                           isVisible={isVisible}
                           onSelect={onSelect}
                           toggleVisibility={toggleVisibility}/>
      </header>

      <AsideOttId nameDevice={nameDevice} />
      <AsideLinkList />

    </StyledAsideDevices>
  )
}
export default injectIntl(AsideDevices)
