import React from 'react'
import Styled from './styled/StyledSubscribeContentTable'

const SubscribeContentTable = ({userType,subscribe}) => {

  return (
    <Styled.Block>
      { userType === 'newdealer' ? (
        <Styled.ItemBuy to={'/'}>{subscribe}</Styled.ItemBuy>
      ) : (
        <Styled.ItemDate>
          <a href="/" >02.03.20 -<span>09.08.20</span></a>
        </Styled.ItemDate>
      )}
    </Styled.Block>






  )};

export default SubscribeContentTable;