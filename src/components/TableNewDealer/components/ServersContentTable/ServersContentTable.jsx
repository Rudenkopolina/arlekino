import React from 'react'
import Styled from './styled/ServersContentTable'
import { FormattedMessage } from 'react-intl'

const ServersContentTable = ({userType }) => {

  return (
    <Styled.Block>
      { userType === 'newdealer' ? (
        <p>-</p>
      ) : (
        <Styled.BlockOldDealer>
          <Styled.Name>Server Rus 01</Styled.Name>
          <Styled.Type><a href="/"><FormattedMessage id='Table.UserType.Name1'/></a></Styled.Type>
        </Styled.BlockOldDealer>
      )}
    </Styled.Block>
  )};

export default ServersContentTable;