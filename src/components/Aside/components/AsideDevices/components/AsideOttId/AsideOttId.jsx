import React from 'react'
import { FormattedMessage } from 'react-intl'
import StyledAsideOttId from './styled/StyledAsideOttId'

const AsideOttId = ({nameDevice}) => {

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

        <i></i>
      </div>
    </StyledAsideOttId>
  )
}
export default AsideOttId
