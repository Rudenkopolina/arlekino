import React from 'react'
import Styled from './styled/StyledMyDevicesBlock'
import { FormattedMessage, injectIntl } from 'react-intl'
import ViewPanel from './components/ViewPanel/ViewPanel'
import DevicesBlock from './components/DevicesBlock/DevicesBlock'

const MyDevices = () => {

  return (
    <Styled.Block>
      <Styled.Title>
        <FormattedMessage id='MyDevicesBlock.Title' />
      </Styled.Title>

      <Styled.Txt>
        <FormattedMessage id='MyDevicesBlock.Txt' />
      </Styled.Txt>

      <ViewPanel />
      <DevicesBlock />
      <Styled.Img />

    </Styled.Block>
  )
}

export default injectIntl((MyDevices))
