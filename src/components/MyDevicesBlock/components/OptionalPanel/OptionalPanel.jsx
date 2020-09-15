import React from 'react'
import Styled from './styled/StyledOptinalViewPanel'
import { FormattedMessage, injectIntl } from 'react-intl'

const devicesTest = [
  {
    name: 'Устройство 1'
  }
]

const OptionalPanel = () => (
  <>
    <Styled.Panel>
      <Styled.Txt><FormattedMessage id="OptionalPanel.Txt" />:</Styled.Txt>
      <Styled.List>
        {
          devicesTest.map(device => (
            <Styled.Item key={device.name}>
              <p>
                { device.name }
              </p>
              <i></i>
            </Styled.Item>
          ))
        }
      </Styled.List>

      <Styled.Button>
        <FormattedMessage id="OptionalPanel.Button" />
      </Styled.Button>

    </Styled.Panel>
  </>
)

export default  injectIntl(OptionalPanel)
